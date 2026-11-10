import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d4nrxputc.css';
import '../../css/c/c0exkc_ei.css';
import '../../css/s/sfac2pb5v.css';
import '../../css/h/h1u5z0bug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d4nrxputc"/><path class="c0exkc_ei"/><path class="sfac2pb5v"/><path class="h1u5z0bug"/></g>`,
		"fallback": "andrsrxn:hospital",
	});
}

export default Component;
