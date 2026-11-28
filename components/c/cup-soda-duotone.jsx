import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a9lqhdcqe.css';
import '../../css/r/rg4835q3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a9lqhdcqe secondary"/><path class="primary rg4835q3e"/></g>`,
		"fallback": "iconaut:cup-soda-duotone",
	});
}

export default Component;
