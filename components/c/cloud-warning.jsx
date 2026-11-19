import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/odjrbuxck.css';
import '../../css/g/gmlg31vel.css';
import '../../css/t/tuha-4bff.css';
import '../../css/h/h-m-98b_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="odjrbuxck"/><path class="gmlg31vel"/><path class="tuha-4bff"/><path class="h-m-98b_p"/></g>`,
		"fallback": "andrsrxn:cloud-warning",
	});
}

export default Component;
