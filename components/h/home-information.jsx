import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_v_pfbhf.css';
import '../../css/j/jkpsqcvpy.css';
import '../../css/n/nux0isb3e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_v_pfbhf"/><path class="jkpsqcvpy"/><path class="nux0isb3e"/>`,
		"fallback": "selfhst:home-information",
	});
}

export default Component;
