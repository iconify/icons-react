import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i-_k8obds.css';
import '../../css/p/p3xi4wb1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i-_k8obds"/><path clip-rule="evenodd" class="p3xi4wb1e"/></g>`,
		"fallback": "gg:abstract",
	});
}

export default Component;
