import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-ja3_bwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-ja3_bwq"/>`,
		"fallback": "tabler:device-desktop-check",
	});
}

export default Component;
