import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p3vlh0i5k.css';
import '../../css/i/igjle7krr.css';
import '../../css/b/bdu_37bbc.css';
import '../../css/v/v059u6b0e.css';
import '../../css/n/nle0ke1sz.css';
import '../../css/y/ycdfr27mi.css';
import '../../css/j/jwfrwlbnf.css';
import '../../css/s/s588wqusc.css';
import '../../css/m/mbabqfkxh.css';
import '../../css/u/uuwqmt_ut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="p3vlh0i5k"/><path class="igjle7krr"/><path class="bdu_37bbc"/><path class="v059u6b0e"/><path class="nle0ke1sz"/><path class="ycdfr27mi"/><path class="jwfrwlbnf"/><path class="s588wqusc"/><path class="mbabqfkxh"/><path class="uuwqmt_ut"/></g>`,
		"fallback": "solar:ferris-wheel-line-duotone",
	});
}

export default Component;
