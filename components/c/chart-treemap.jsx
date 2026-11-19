import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cxs7as6rw.css';
import '../../css/q/qh9krku1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cxs7as6rw"/><path class="qh9krku1f"/></g>`,
		"fallback": "andrsrxn:chart-treemap",
	});
}

export default Component;
