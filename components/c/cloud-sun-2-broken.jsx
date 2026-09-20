import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yrrkfb5pj.css';
import '../../css/c/ceczstbrz.css';
import '../../css/t/t1f8c32xf.css';
import '../../css/s/sd19jvbvo.css';
import '../../css/b/bkq0qtv2r.css';
import '../../css/o/o24xax7un.css';
import '../../css/w/w5cn7xlse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yrrkfb5pj"/><path class="ceczstbrz"/><path class="t1f8c32xf"/><path class="sd19jvbvo"/><path class="bkq0qtv2r"/><path class="o24xax7un"/><path class="w5cn7xlse"/></g>`,
		"fallback": "solar:cloud-sun-2-broken",
	});
}

export default Component;
