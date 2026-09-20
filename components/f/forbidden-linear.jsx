import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o8j-s-bwz.css';
import '../../css/l/ldv_ytb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o8j-s-bwz"/><path class="ldv_ytb6d"/></g>`,
		"fallback": "solar:forbidden-linear",
	});
}

export default Component;
