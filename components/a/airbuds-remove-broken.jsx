import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tslmujbuk.css';
import '../../css/p/pd6vqjbhf.css';
import '../../css/j/jswmtpb4p.css';
import '../../css/b/b--td4bgk.css';
import '../../css/s/safgk8eus.css';
import '../../css/k/k5hj5eb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tslmujbuk"/><path class="pd6vqjbhf"/><path class="jswmtpb4p"/><path class="b--td4bgk"/><path class="safgk8eus"/><path class="k5hj5eb9y"/></g>`,
		"fallback": "solar:airbuds-remove-broken",
	});
}

export default Component;
