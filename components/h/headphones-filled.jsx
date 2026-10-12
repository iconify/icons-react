import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxg1ejcsa.css';
import '../../css/x/x1zaw8b2v.css';
import '../../css/q/qwerctbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 8.99 21)" class="wxg1ejcsa"/><rect transform="matrix(0 -1 -1 0 21.25 21)" class="wxg1ejcsa"/><path class="x1zaw8b2v"/><path class="qwerctbpn"/></g>`,
		"fallback": "andrsrxn:headphones-filled",
	});
}

export default Component;
