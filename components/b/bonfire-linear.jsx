import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n6tc07bpg.css';
import '../../css/j/jwvedsvir.css';
import '../../css/s/sqy-cgo_l.css';
import '../../css/g/g6m793csp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="n6tc07bpg"/><path class="jwvedsvir"/><path class="sqy-cgo_l"/><path class="g6m793csp"/></g>`,
		"fallback": "solar:bonfire-linear",
	});
}

export default Component;
