import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hc3-1abqr.css';
import '../../css/b/bbikbkuko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hc3-1abqr"/><path class="bbikbkuko"/></g>`,
		"fallback": "coolicons:chart-bar-horizontal-bulk-round",
	});
}

export default Component;
