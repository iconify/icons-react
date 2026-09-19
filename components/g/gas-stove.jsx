import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t8e-pkcgt.css';
import '../../css/t/t6qagibeg.css';
import '../../css/x/xvj31lbcb.css';
import '../../css/p/p12apbc6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="t8e-pkcgt"/><path class="t6qagibeg"/><path class="xvj31lbcb"/><path class="p12apbc6k"/></g>`,
		"fallback": "hugeicons:gas-stove",
	});
}

export default Component;
