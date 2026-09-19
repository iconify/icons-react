import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hij1pb51c.css';
import '../../css/u/ub_arxa5v.css';
import '../../css/k/k__3w58ri.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hij1pb51c"/><path class="ub_arxa5v"/><path clip-rule="evenodd" class="k__3w58ri"/></g>`,
		"fallback": "healthicons:3g",
	});
}

export default Component;
