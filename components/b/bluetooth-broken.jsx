import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ehewotkqs.css';
import '../../css/h/hbv47lb9l.css';
import '../../css/f/fch9epbwt.css';
import '../../css/x/xfe_oobgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ehewotkqs"/><path class="hbv47lb9l"/><path class="fch9epbwt"/><path class="xfe_oobgk"/></g>`,
		"fallback": "solar:bluetooth-broken",
	});
}

export default Component;
