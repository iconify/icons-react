import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y4fit16lf.css';
import '../../css/g/gymposbcv.css';
import '../../css/f/fcxee8bwt.css';
import '../../css/w/wr37rh77k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y4fit16lf"/><path class="gymposbcv"/><path class="fcxee8bwt"/><path class="wr37rh77k"/></g>`,
		"fallback": "solar:dialog-2-broken",
	});
}

export default Component;
