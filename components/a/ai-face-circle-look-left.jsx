import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/f/fiq57el9u.css';
import '../../css/r/rz1s7ibqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ud95brdct"/><path class="fiq57el9u"/><path class="rz1s7ibqh"/></g>`,
		"fallback": "iconaut:ai-face-circle-look-left",
	});
}

export default Component;
