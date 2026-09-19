import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1tn6e0wi.css';
import '../../css/o/ozhg_rr4i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a1tn6e0wi"/><path clip-rule="evenodd" class="ozhg_rr4i"/></g>`,
		"fallback": "healthicons:home2x-outline",
	});
}

export default Component;
