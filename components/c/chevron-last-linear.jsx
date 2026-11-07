import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/au2x9qshz.css';
import '../../css/p/p4t13zvsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="au2x9qshz"/><path class="p4t13zvsx"/></g>`,
		"fallback": "solar:chevron-last-linear",
	});
}

export default Component;
