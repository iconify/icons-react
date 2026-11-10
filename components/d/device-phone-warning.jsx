import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gwa_xrvay.css';
import '../../css/a/art-432ke.css';
import '../../css/l/ln26x0ubc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gwa_xrvay"/><path class="art-432ke"/><path class="ln26x0ubc"/></g>`,
		"fallback": "andrsrxn:device-phone-warning",
	});
}

export default Component;
