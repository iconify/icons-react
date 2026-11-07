import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t4ah6hn1b.css';
import '../../css/w/w1madfl2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t4ah6hn1b"/><path class="w1madfl2s"/></g>`,
		"fallback": "solar:crown-star-linear",
	});
}

export default Component;
