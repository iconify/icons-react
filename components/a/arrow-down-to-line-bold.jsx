import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s0l1aibhw.css';
import '../../css/g/g6qndub7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s0l1aibhw"/><path class="g6qndub7h"/></g>`,
		"fallback": "solar:arrow-down-to-line-bold",
	});
}

export default Component;
