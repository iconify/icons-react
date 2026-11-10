import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zkbul1bzi.css';
import '../../css/s/s2u5d-b_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zkbul1bzi"/><path class="s2u5d-b_q"/></g>`,
		"fallback": "andrsrxn:chart-bar-vertical",
	});
}

export default Component;
