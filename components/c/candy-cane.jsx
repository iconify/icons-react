import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i4_8t_b6o.css';
import '../../css/j/j9ky_7bsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i4_8t_b6o"/><path class="j9ky_7bsf"/></g>`,
		"fallback": "andrsrxn:candy-cane",
	});
}

export default Component;
