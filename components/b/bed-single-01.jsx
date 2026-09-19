import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w-1c8gqjv.css';
import '../../css/w/wnskr0b-c.css';
import '../../css/n/n4gnk9blb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w-1c8gqjv"/><path class="wnskr0b-c"/><path class="n4gnk9blb"/></g>`,
		"fallback": "hugeicons:bed-single-01",
	});
}

export default Component;
