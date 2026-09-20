import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bhy-axcbm.css';
import '../../css/w/w5j1ppb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bhy-axcbm"/><path class="w5j1ppb8l"/></g>`,
		"fallback": "solar:circle-bottom-up-broken",
	});
}

export default Component;
