import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h2uxnj0rx.css';
import '../../css/j/jk8ht367b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h2uxnj0rx"/><path class="jk8ht367b"/></g>`,
		"fallback": "hugeicons:ellipse-selection",
	});
}

export default Component;
