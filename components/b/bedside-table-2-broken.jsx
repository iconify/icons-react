import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/khhypgwbg.css';
import '../../css/d/d2-0y-bwi.css';
import '../../css/k/kuresbtjc.css';
import '../../css/r/rp5yf760j.css';
import '../../css/v/vy5waob-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="khhypgwbg"/><path class="d2-0y-bwi"/><path class="kuresbtjc"/><path class="rp5yf760j"/><path class="vy5waob-q"/></g>`,
		"fallback": "solar:bedside-table-2-broken",
	});
}

export default Component;
