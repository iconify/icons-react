import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y18ifgb9m.css';
import '../../css/j/jql7xib6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y18ifgb9m"/><path class="jql7xib6k"/></g>`,
		"fallback": "hugeicons:bookmark-minus-01",
	});
}

export default Component;
