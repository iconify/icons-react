import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lbw9749uh.css';
import '../../css/o/o0ts0zbcs.css';
import '../../css/z/zn_lb-99n.css';
import '../../css/j/junfg7bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lbw9749uh"/><path class="o0ts0zbcs"/><path class="zn_lb-99n"/><path class="junfg7bvg"/></g>`,
		"fallback": "solar:cart-check-line-duotone",
	});
}

export default Component;
