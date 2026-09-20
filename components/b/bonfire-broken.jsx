import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jwvedsvir.css';
import '../../css/l/l5vdtnbpz.css';
import '../../css/g/g6m793csp.css';
import '../../css/d/d0hlz7c2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jwvedsvir"/><path class="l5vdtnbpz"/><path class="g6m793csp"/><path class="d0hlz7c2c"/></g>`,
		"fallback": "solar:bonfire-broken",
	});
}

export default Component;
