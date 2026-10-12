import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-o72bbfc.css';
import '../../css/w/wx5enbbcm.css';
import '../../css/x/xr4_c7bsq.css';
import '../../css/t/t0rxeobhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-o72bbfc"/><path class="wx5enbbcm"/><path class="xr4_c7bsq"/><path class="t0rxeobhs"/></g>`,
		"fallback": "andrsrxn:bug-play",
	});
}

export default Component;
