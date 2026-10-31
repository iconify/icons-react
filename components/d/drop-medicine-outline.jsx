import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n_brcyb1d.css';
import '../../css/w/wmhmecc_x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n_brcyb1d"/><path clip-rule="evenodd" class="wmhmecc_x"/></g>`,
		"fallback": "healthicons:drop-medicine-outline",
	});
}

export default Component;
