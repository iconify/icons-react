import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hfgfej-pu.css';
import '../../css/i/ikm7yzbbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hfgfej-pu"/><path class="ikm7yzbbb"/></g>`,
		"fallback": "hugeicons:arrow-up-right-03",
	});
}

export default Component;
