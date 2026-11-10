import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hbq2pbd0n.css';
import '../../css/d/d0qzqeo5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hbq2pbd0n"/><path class="d0qzqeo5a"/></g>`,
		"fallback": "andrsrxn:bricks-check",
	});
}

export default Component;
