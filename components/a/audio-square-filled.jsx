import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wbugi1jic.css';
import '../../css/k/kwbt4tbxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wbugi1jic"/><path class="kwbt4tbxr"/></g>`,
		"fallback": "reicon:audio-square-filled",
	});
}

export default Component;
