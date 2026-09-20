import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mzncedspo.css';
import '../../css/y/yva4__bne.css';
import '../../css/h/hh_3v458p.css';
import '../../css/f/f6a2dhcys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mzncedspo"/><path class="yva4__bne"/><path class="hh_3v458p"/><path class="f6a2dhcys"/></g>`,
		"fallback": "solar:bill-broken",
	});
}

export default Component;
