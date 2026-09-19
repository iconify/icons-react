import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wc0j0g20c.css';
import '../../css/u/u_mclfbbt.css';
import '../../css/u/ucpkowjmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wc0j0g20c"/><path class="u_mclfbbt"/><path class="ucpkowjmb"/></g>`,
		"fallback": "hugeicons:in-love",
	});
}

export default Component;
