import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i4dcgmbin.css';
import '../../css/g/gs36c5bhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i4dcgmbin"/><path class="gs36c5bhc"/></g>`,
		"fallback": "solar:folder-down-broken",
	});
}

export default Component;
