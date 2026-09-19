import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/e/ey92g6b7j.css';
import '../../css/k/k23tj10xr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="ey92g6b7j"/><path class="k23tj10xr"/></g>`,
		"fallback": "pepicons:hash-print",
	});
}

export default Component;
