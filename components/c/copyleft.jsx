import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dxbrj2n4c.css';
import '../../css/o/oi3o7hw2k.css';
import '../../css/a/at6qb9bes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dxbrj2n4c"/><path class="oi3o7hw2k"/><path class="at6qb9bes"/></g>`,
		"fallback": "andrsrxn:copyleft",
	});
}

export default Component;
