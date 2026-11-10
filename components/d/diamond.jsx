import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4m669xzj.css';
import '../../css/f/fxfe5ob6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e4m669xzj"/><path class="fxfe5ob6u"/></g>`,
		"fallback": "andrsrxn:diamond",
	});
}

export default Component;
