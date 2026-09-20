import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fq-dxvtwh.css';
import '../../css/h/hd9dfxb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fq-dxvtwh"/><path clip-rule="evenodd" class="hd9dfxb9y"/></g>`,
		"fallback": "reicon:flip-h-filled",
	});
}

export default Component;
