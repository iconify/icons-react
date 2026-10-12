import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jov0oyv-v.css';
import '../../css/d/d_nym14to.css';
import '../../css/n/nax8nabvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.32 19.25)" class="jov0oyv-v"/><rect transform="matrix(0 -1 -1 0 22.32 19.25)" class="d_nym14to"/><path class="nax8nabvu"/></g>`,
		"fallback": "andrsrxn:dock",
	});
}

export default Component;
