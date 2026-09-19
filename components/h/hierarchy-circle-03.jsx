import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e842h2b0v.css';
import '../../css/f/fwi1i6brr.css';
import '../../css/u/uukfrxkmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="e842h2b0v"/><path class="fwi1i6brr"/><path class="uukfrxkmh"/></g>`,
		"fallback": "hugeicons:hierarchy-circle-03",
	});
}

export default Component;
