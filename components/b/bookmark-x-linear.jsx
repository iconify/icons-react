import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lf18tubmv.css';
import '../../css/t/tb58kfbad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lf18tubmv"/><path class="tb58kfbad"/></g>`,
		"fallback": "solar:bookmark-x-linear",
	});
}

export default Component;
