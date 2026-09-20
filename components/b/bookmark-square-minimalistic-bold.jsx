import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yxo9t5hho.css';
import '../../css/m/mnf28n1ia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yxo9t5hho"/><path class="mnf28n1ia"/></g>`,
		"fallback": "solar:bookmark-square-minimalistic-bold",
	});
}

export default Component;
