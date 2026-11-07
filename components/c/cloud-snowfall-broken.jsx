import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dza1onb6k.css';
import '../../css/x/xy9o4mbiz.css';
import '../../css/o/o7h2koe1s.css';
import '../../css/i/ig0aucc_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dza1onb6k"/><path class="xy9o4mbiz"/><path class="o7h2koe1s"/><path class="ig0aucc_q"/></g>`,
		"fallback": "solar:cloud-snowfall-broken",
	});
}

export default Component;
