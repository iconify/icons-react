import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vckmfeq5c.css';
import '../../css/i/i2q3oaceu.css';
import '../../css/w/wvwojyb1o.css';
import '../../css/c/c20zxwbse.css';
import '../../css/q/qicxzyeyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vckmfeq5c"/><path class="i2q3oaceu"/><path class="wvwojyb1o"/><path class="c20zxwbse"/><path class="qicxzyeyu"/></g>`,
		"fallback": "solar:headphones-square-linear",
	});
}

export default Component;
