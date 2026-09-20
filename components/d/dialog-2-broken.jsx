import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/ccx_fgbqa.css';
import '../../css/g/gymposbcv.css';
import '../../css/f/fcxee8bwt.css';
import '../../css/r/r3i1mebrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ccx_fgbqa"/><path class="gymposbcv"/><path class="fcxee8bwt"/><path class="r3i1mebrv"/></g>`,
		"fallback": "solar:dialog-2-broken",
	});
}

export default Component;
