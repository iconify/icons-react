import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w1madfl2s.css';
import '../../css/d/d47bocb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w1madfl2s"/><path class="d47bocb9j"/></g>`,
		"fallback": "solar:crown-star-broken",
	});
}

export default Component;
