import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lf18tubmv.css';
import '../../css/y/y8nf5iuxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lf18tubmv"/><path class="y8nf5iuxm"/></g>`,
		"fallback": "solar:bookmark-plus-linear",
	});
}

export default Component;
