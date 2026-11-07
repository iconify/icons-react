import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cwb91r7bm.css';
import '../../css/z/z-5dtelxe.css';
import '../../css/d/d0_8dmtbg.css';
import '../../css/f/f6a2dhcys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cwb91r7bm"/><path class="z-5dtelxe"/><path class="d0_8dmtbg"/><path class="f6a2dhcys"/></g>`,
		"fallback": "solar:bill-broken",
	});
}

export default Component;
