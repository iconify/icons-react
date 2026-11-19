import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ow5z5-bur.css';
import '../../css/w/ws04_5bdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ow5z5-bur"/><path class="ws04_5bdl"/></g>`,
		"fallback": "andrsrxn:hockey",
	});
}

export default Component;
