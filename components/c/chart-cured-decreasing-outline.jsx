import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wukql_a8h.css';
import '../../css/x/xsbdzobxg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wukql_a8h"/><path clip-rule="evenodd" class="xsbdzobxg"/></g>`,
		"fallback": "healthicons:chart-cured-decreasing-outline",
	});
}

export default Component;
