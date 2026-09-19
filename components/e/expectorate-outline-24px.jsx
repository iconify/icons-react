import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e6r0cm-zy.css';
import '../../css/v/vpz66ccjz.css';
import '../../css/k/kwx9ypbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e6r0cm-zy"/><path class="vpz66ccjz"/><path clip-rule="evenodd" class="kwx9ypbdd"/></g>`,
		"fallback": "healthicons:expectorate-outline-24px",
	});
}

export default Component;
