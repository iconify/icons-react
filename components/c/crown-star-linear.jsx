import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h07wc-b9o.css';
import '../../css/i/i7brq-b4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h07wc-b9o"/><path class="i7brq-b4x"/></g>`,
		"fallback": "solar:crown-star-linear",
	});
}

export default Component;
