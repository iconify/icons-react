import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p8c1pj53n.css';
import '../../css/p/pa30tfbac.css';
import '../../css/i/ilthk8zbw.css';
import '../../css/y/yf1yh2b6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="p8c1pj53n"/><path class="pa30tfbac"/><path class="ilthk8zbw"/><path class="yf1yh2b6t"/></g>`,
		"fallback": "streamline-ultimate:cash-payment-bills",
	});
}

export default Component;
