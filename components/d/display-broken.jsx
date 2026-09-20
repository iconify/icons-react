import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uf7vldboe.css';
import '../../css/q/q409rr05o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uf7vldboe"/><path class="q409rr05o"/></g>`,
		"fallback": "solar:display-broken",
	});
}

export default Component;
