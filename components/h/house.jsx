import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j98zyvw-v.css';
import '../../css/r/ra9uy6but.css';
import '../../css/j/jz956cczw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j98zyvw-v"/><path class="ra9uy6but"/><path class="jz956cczw"/></g>`,
		"fallback": "andrsrxn:house",
	});
}

export default Component;
