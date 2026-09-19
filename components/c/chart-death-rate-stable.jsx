import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j5eqa4bgt.css';
import '../../css/l/l-6s2cixh.css';
import '../../css/y/y0z3zppyt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j5eqa4bgt"/><path clip-rule="evenodd" class="l-6s2cixh"/><path class="y0z3zppyt"/></g>`,
		"fallback": "healthicons:chart-death-rate-stable",
	});
}

export default Component;
