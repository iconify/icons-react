import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pe1yp-5zp.css';
import '../../css/c/c4im97brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pe1yp-5zp"/><path class="c4im97brj"/></g>`,
		"fallback": "andrsrxn:heel",
	});
}

export default Component;
