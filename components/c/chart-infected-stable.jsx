import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xqtq6fuwi.css';
import '../../css/y/y0z3zppyt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xqtq6fuwi"/><path class="y0z3zppyt"/></g>`,
		"fallback": "healthicons:chart-infected-stable",
	});
}

export default Component;
