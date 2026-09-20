import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h2ep6hbtb.css';
import '../../css/u/uf62puzpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h2ep6hbtb"/><path class="uf62puzpj"/></g>`,
		"fallback": "solar:chat-square-off-bold",
	});
}

export default Component;
