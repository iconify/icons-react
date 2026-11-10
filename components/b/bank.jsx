import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hz85s5jme.css';
import '../../css/u/u_ujl8bph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hz85s5jme"/><path class="u_ujl8bph"/></g>`,
		"fallback": "andrsrxn:bank",
	});
}

export default Component;
