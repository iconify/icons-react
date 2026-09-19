import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/luxx1qbws.css';
import '../../css/t/t1gmg32ih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="luxx1qbws"/><path class="t1gmg32ih"/></g>`,
		"fallback": "hugeicons:china-temple",
	});
}

export default Component;
