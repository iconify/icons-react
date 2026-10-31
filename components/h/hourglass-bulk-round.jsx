import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g_7lp9baj.css';
import '../../css/a/a3chgg7oi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g_7lp9baj"/><path class="a3chgg7oi"/></g>`,
		"fallback": "coolicons:hourglass-bulk-round",
	});
}

export default Component;
