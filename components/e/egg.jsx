import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ipqn_acuc.css';
import '../../css/a/aoxrtp9nb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ipqn_acuc"/><path class="aoxrtp9nb"/></g>`,
		"fallback": "andrsrxn:egg",
	});
}

export default Component;
