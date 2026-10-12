import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqlpe4bjv.css';
import '../../css/i/i1o4ddcpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fqlpe4bjv"/><path class="i1o4ddcpm"/></g>`,
		"fallback": "andrsrxn:heart-plus",
	});
}

export default Component;
