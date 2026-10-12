import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fec7anbze.css';
import '../../css/z/ztfwm1pim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fec7anbze"/><path class="ztfwm1pim"/></g>`,
		"fallback": "andrsrxn:box-x",
	});
}

export default Component;
