import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p1rk-1d3x.css';
import '../../css/o/o7vwpcj7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p1rk-1d3x"/><path class="o7vwpcj7f"/></g>`,
		"fallback": "andrsrxn:fire-kindling",
	});
}

export default Component;
