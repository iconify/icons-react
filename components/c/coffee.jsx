import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nadi-cb7j.css';
import '../../css/o/osnxspq1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nadi-cb7j"/><path class="osnxspq1o"/></g>`,
		"fallback": "andrsrxn:coffee",
	});
}

export default Component;
