import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d7_y3k80y.css';
import '../../css/m/m471xsbvh.css';
import '../../css/q/qg_-d1bma.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d7_y3k80y"/><path clip-rule="evenodd" class="m471xsbvh"/><path class="qg_-d1bma"/></g>`,
		"fallback": "healthicons:hot-meal-outline",
	});
}

export default Component;
