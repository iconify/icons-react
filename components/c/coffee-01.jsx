import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l-8mz5b-x.css';
import '../../css/h/hptw_1knf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l-8mz5b-x"/><ellipse class="hptw_1knf"/></g>`,
		"fallback": "hugeicons:coffee-01",
	});
}

export default Component;
