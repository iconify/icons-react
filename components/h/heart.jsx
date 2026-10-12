import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqlpe4bjv.css';
import '../../css/a/ajs3_q8er.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fqlpe4bjv"/><path class="ajs3_q8er"/></g>`,
		"fallback": "andrsrxn:heart",
	});
}

export default Component;
