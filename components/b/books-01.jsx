import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xip2u2v4p.css';
import '../../css/l/lbo2i9b0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xip2u2v4p"/><path class="lbo2i9b0s"/></g>`,
		"fallback": "hugeicons:books-01",
	});
}

export default Component;
