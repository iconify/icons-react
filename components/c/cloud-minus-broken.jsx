import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ig0aucc_q.css';
import '../../css/o/o4rtgrbnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ig0aucc_q"/><path class="o4rtgrbnb"/></g>`,
		"fallback": "solar:cloud-minus-broken",
	});
}

export default Component;
