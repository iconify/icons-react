import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tux9qibeh.css';
import '../../css/w/w4kybtbut.css';
import '../../css/p/ptst46b8o.css';
import '../../css/m/m07l0ebkr.css';
import '../../css/n/n7bwbgzrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tux9qibeh"/><path class="w4kybtbut"/><rect transform="matrix(0 -1 -1 0 20.79 21.3)" class="ptst46b8o"/><path class="m07l0ebkr"/><path class="n7bwbgzrl"/></g>`,
		"fallback": "andrsrxn:gamepad-screen",
	});
}

export default Component;
