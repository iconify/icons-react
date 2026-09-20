import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-salgbqh.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w65p1cg6j.css';
import '../../css/k/kdxmgm20z.css';
import '../../css/d/dpqcn1bru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGsrg0ndkk" width="18" height="18" x="3" y="3" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="f-salgbqh"/></mask><g class="ft5dv1b6b"><g mask="url(#SVGsrg0ndkk)"><path class="w65p1cg6j"/></g><circle class="kdxmgm20z"/><path class="dpqcn1bru"/></g>`,
		"fallback": "lets-icons:img-out-box-duotone",
	});
}

export default Component;
