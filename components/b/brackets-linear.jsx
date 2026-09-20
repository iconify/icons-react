import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sc6p54bfo.css';
import '../../css/n/nhy0cgbsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sc6p54bfo"/><path class="nhy0cgbsy"/></g>`,
		"fallback": "solar:brackets-linear",
	});
}

export default Component;
