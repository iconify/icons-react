import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae2-w0cbe.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y8d9j006r.css';
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
		"content": `<path class="ae2-w0cbe secondary"/><g class="dt0cm9dhy primary"><path class="y8d9j006r"/><path class="fiq57el9u"/><path class="rz1s7ibqh"/></g>`,
		"fallback": "iconaut:ai-face-look-left-duo",
	});
}

export default Component;
