import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/onlvb4bhx.css';
import '../../css/b/bajbv76mu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="onlvb4bhx"/><path class="bajbv76mu"/></g>`,
		"fallback": "healthicons:electricity",
	});
}

export default Component;
