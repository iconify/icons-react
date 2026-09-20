import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/opxnc6bmd.css';
import '../../css/w/w4ndirbqr.css';
import '../../css/t/toa8mgbjl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="opxnc6bmd"/><path class="w4ndirbqr"/><path class="toa8mgbjl"/></g>`,
		"fallback": "streamline-flex:credit-card-4",
	});
}

export default Component;
