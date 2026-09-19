import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jaw5q-ngy.css';
import '../../css/e/e13o9n15q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jaw5q-ngy"/><path class="e13o9n15q"/></g>`,
		"fallback": "hugeicons:exchange-03",
	});
}

export default Component;
