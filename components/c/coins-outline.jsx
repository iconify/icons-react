import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jt50z3bql.css';
import '../../css/i/ij34_2wnx.css';
import '../../css/m/mgfuygb4n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jt50z3bql"/><path clip-rule="evenodd" class="ij34_2wnx"/><path clip-rule="evenodd" class="mgfuygb4n"/></g>`,
		"fallback": "healthicons:coins-outline",
	});
}

export default Component;
