import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uez9g3phl.css';
import '../../css/d/dg4q0pbdz.css';
import '../../css/o/oykfvjbjk.css';
import '../../css/o/otyq2mbyr.css';
import '../../css/q/q-6ytgayj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="uez9g3phl"/><circle class="dg4q0pbdz"/><path class="oykfvjbjk"/><rect transform="matrix(0 -1 -1 0 22.29 19.46)" class="otyq2mbyr"/><rect transform="matrix(0 -1 -1 0 22.29 19.46)" class="q-6ytgayj"/></g>`,
		"fallback": "andrsrxn:faucet",
	});
}

export default Component;
