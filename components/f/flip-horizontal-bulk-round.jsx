import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qnuo2e4sb.css';
import '../../css/u/uu8iy5mdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qnuo2e4sb"/><path class="uu8iy5mdc"/></g>`,
		"fallback": "coolicons:flip-horizontal-bulk-round",
	});
}

export default Component;
