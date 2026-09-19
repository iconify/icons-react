import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cttsinjaj.css';
import '../../css/q/q4rx7-njg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cttsinjaj"/><path class="q4rx7-njg"/></g>`,
		"fallback": "healthicons:hiv-neg",
	});
}

export default Component;
