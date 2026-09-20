import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxfe_ublk.css';
import '../../css/u/u-5087bul.css';
import '../../css/y/yn4kitb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxfe_ublk"/><path class="u-5087bul"/><path clip-rule="evenodd" class="yn4kitb9p"/>`,
		"fallback": "lineicons:gauge-1",
	});
}

export default Component;
