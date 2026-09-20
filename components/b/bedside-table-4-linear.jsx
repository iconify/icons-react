import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/khhypgwbg.css';
import '../../css/i/ij9zn-b0e.css';
import '../../css/d/d8ir8h8wj.css';
import '../../css/l/l13ee7boy.css';
import '../../css/i/ix2yyfqqg.css';
import '../../css/r/rp5yf760j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="khhypgwbg"/><path class="ij9zn-b0e"/><path class="d8ir8h8wj"/><path class="l13ee7boy"/><path class="ix2yyfqqg"/><path class="rp5yf760j"/></g>`,
		"fallback": "solar:bedside-table-4-linear",
	});
}

export default Component;
