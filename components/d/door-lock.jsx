import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wzw4es6ls.css';
import '../../css/o/od7-spyji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wzw4es6ls"/><path class="od7-spyji"/></g>`,
		"fallback": "hugeicons:door-lock",
	});
}

export default Component;
