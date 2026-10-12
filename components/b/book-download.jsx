import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eksto926v.css';
import '../../css/g/gpu_i7bxv.css';
import '../../css/k/k2h3-dbvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eksto926v"/><path class="gpu_i7bxv"/><path class="k2h3-dbvt"/></g>`,
		"fallback": "andrsrxn:book-download",
	});
}

export default Component;
