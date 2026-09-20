import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j8_7y3biq.css';
import '../../css/k/kc1gurb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j8_7y3biq"/><path class="kc1gurb8q"/></g>`,
		"fallback": "solar:home-angle-broken",
	});
}

export default Component;
