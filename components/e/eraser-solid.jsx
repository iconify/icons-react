import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hibomabxu.css';
import '../../css/f/fo-fi7b3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hibomabxu"/><path class="fo-fi7b3n"/></g>`,
		"fallback": "iconaut:eraser-solid",
	});
}

export default Component;
