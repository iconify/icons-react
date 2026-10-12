import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brgb34b4x.css';
import '../../css/o/odjrbuxck.css';
import '../../css/p/phf_bnd-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="brgb34b4x"/><path class="odjrbuxck"/><path class="phf_bnd-l"/></g>`,
		"fallback": "andrsrxn:cloud-download",
	});
}

export default Component;
