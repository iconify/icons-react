import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ixys9inif.css';
import '../../css/d/d0k502nsw.css';
import '../../css/e/efb3h0bra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ixys9inif"/><path class="d0k502nsw"/><path class="efb3h0bra"/></g>`,
		"fallback": "solar:balloon-linear",
	});
}

export default Component;
