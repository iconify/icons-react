import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/frwvbckoo.css';
import '../../css/f/forx9ld3b.css';
import '../../css/o/okvzs9bzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="frwvbckoo"/><path class="forx9ld3b"/><path class="okvzs9bzz"/></g>`,
		"fallback": "andrsrxn:glass-water",
	});
}

export default Component;
