import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oh98cab1c.css';
import '../../css/y/yeinjdbth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oh98cab1c"/><path class="yeinjdbth"/></g>`,
		"fallback": "hugeicons:finger-print-add",
	});
}

export default Component;
