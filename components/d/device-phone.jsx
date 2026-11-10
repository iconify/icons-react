import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gwa_xrvay.css';
import '../../css/j/j1n7q8bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gwa_xrvay"/><path class="j1n7q8bbg"/></g>`,
		"fallback": "andrsrxn:device-phone",
	});
}

export default Component;
