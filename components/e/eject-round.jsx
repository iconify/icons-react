import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adzf2_byo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adzf2_byo"/>`,
		"fallback": "coolicons:eject-round",
	});
}

export default Component;
