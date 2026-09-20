import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gs_mr7bpp.css';
import '../../css/h/h9uq00g_q.css';
import '../../css/q/qkowx-d8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gs_mr7bpp"/><path class="h9uq00g_q"/><path class="qkowx-d8d"/></g>`,
		"fallback": "solar:align-left-bold",
	});
}

export default Component;
