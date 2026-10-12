import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sy180cwom.css';
import '../../css/w/w4ay-ib0k.css';
import '../../css/c/crio94knm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sy180cwom"/><path class="w4ay-ib0k"/><path class="crio94knm"/></g>`,
		"fallback": "andrsrxn:device-phone-sparkle",
	});
}

export default Component;
