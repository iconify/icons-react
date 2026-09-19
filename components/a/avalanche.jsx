import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eknvkdekp.css';
import '../../css/o/o2c0qr9ls.css';
import '../../css/a/abllbbbtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eknvkdekp"/><path class="o2c0qr9ls"/><path class="abllbbbtj"/></g>`,
		"fallback": "hugeicons:avalanche",
	});
}

export default Component;
