import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e6ub0677o.css';
import '../../css/b/byy7fo4oz.css';
import '../../css/g/g5-uz2b5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e6ub0677o"/><path class="byy7fo4oz"/><rect transform="matrix(0 -1 -1 0 19.24 22.27)" class="g5-uz2b5k"/></g>`,
		"fallback": "andrsrxn:fridge",
	});
}

export default Component;
