import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wixeoobeg.css';
import '../../css/c/c-uprsbhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wixeoobeg"/><path class="c-uprsbhj"/></g>`,
		"fallback": "withicons-retro:chart-scatter",
	});
}

export default Component;
