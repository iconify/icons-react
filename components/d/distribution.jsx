import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jywje-bzf.css';
import '../../css/y/y_qtl8xnq.css';
import '../../css/i/i5jvc7bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jywje-bzf"/><path class="y_qtl8xnq"/><path class="i5jvc7bst"/></g>`,
		"fallback": "hugeicons:distribution",
	});
}

export default Component;
