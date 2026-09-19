import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/np4b6qtoh.css';
import '../../css/k/k-3r5pl7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="np4b6qtoh"/><path class="k-3r5pl7a"/></g>`,
		"fallback": "hugeicons:folder-details-reference",
	});
}

export default Component;
