import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rvtvsac0j.css';
import '../../css/b/b_gtj024f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rvtvsac0j"/><path class="b_gtj024f"/></g>`,
		"fallback": "andrsrxn:calendar-minus",
	});
}

export default Component;
