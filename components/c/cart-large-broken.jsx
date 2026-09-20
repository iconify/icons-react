import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tgtr_43fx.css';
import '../../css/r/r7x2ymb7x.css';
import '../../css/s/s2a48dbdz.css';
import '../../css/c/cymdn4buh.css';
import '../../css/w/wae6ynbyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tgtr_43fx"/><path class="r7x2ymb7x"/><path class="s2a48dbdz"/><path class="cymdn4buh"/><path class="wae6ynbyd"/></g>`,
		"fallback": "solar:cart-large-broken",
	});
}

export default Component;
