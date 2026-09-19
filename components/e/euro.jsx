import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/ww6x0zbfs.css';
import '../../css/p/pvfwkubhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ww6x0zbfs"/><path class="pvfwkubhp"/></g>`,
		"fallback": "hugeicons:euro",
	});
}

export default Component;
