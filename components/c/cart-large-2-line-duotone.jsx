import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mo08gcb_w.css';
import '../../css/l/lbw9749uh.css';
import '../../css/o/o0ts0zbcs.css';
import '../../css/k/kvicmu0no.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mo08gcb_w"/><path class="lbw9749uh"/><path class="o0ts0zbcs"/><path class="kvicmu0no"/></g>`,
		"fallback": "solar:cart-large-2-line-duotone",
	});
}

export default Component;
