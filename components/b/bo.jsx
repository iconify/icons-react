import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o-6i1tp1u.css';
import '../../css/i/i0gqwhbgn.css';
import '../../css/o/obbq0pb6c.css';

const viewBox = {"width":301,"height":205};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o-6i1tp1u"/><path class="i0gqwhbgn"/><path class="obbq0pb6c"/></g>`,
		"fallback": "cif:bo",
	});
}

export default Component;
