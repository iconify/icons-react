import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y4i2chzkr.css';
import '../../css/d/dpgw2eb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(.7071 -.7071 .72762 .68598 5.01 20.28)" class="y4i2chzkr"/><path class="dpgw2eb7a"/></g>`,
		"fallback": "andrsrxn:comb",
	});
}

export default Component;
