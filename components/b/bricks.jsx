import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nepy-emgn.css';
import '../../css/n/no24npb0h.css';
import '../../css/o/ojxthdcbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="nepy-emgn"/><rect class="no24npb0h"/><path class="ojxthdcbq"/></g>`,
		"fallback": "andrsrxn:bricks",
	});
}

export default Component;
