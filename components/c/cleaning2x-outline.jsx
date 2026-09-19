import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r5esisbmo.css';
import '../../css/y/y_grtn_2d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r5esisbmo"/><path class="y_grtn_2d"/></g>`,
		"fallback": "healthicons:cleaning2x-outline",
	});
}

export default Component;
