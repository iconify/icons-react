import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fglng1o9r.css';
import '../../css/w/wh8-fejds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fglng1o9r"/><path class="wh8-fejds"/></g>`,
		"fallback": "solar:chevron-last-line-duotone",
	});
}

export default Component;
