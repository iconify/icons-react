import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ki1yrm9mz.css';
import '../../css/p/pqcexib7g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ki1yrm9mz"/><path class="pqcexib7g"/></g>`,
		"fallback": "healthicons:alert-circle2x-outline",
	});
}

export default Component;
