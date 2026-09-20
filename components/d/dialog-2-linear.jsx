import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uxtlp1b8r.css';
import '../../css/w/w48o_g6he.css';
import '../../css/r/r3i1mebrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uxtlp1b8r"/><path class="w48o_g6he"/><path class="r3i1mebrv"/></g>`,
		"fallback": "solar:dialog-2-linear",
	});
}

export default Component;
