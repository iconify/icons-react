import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1d6nl1et.css';
import '../../css/e/ejct46bml.css';
import '../../css/y/yp_ly4b6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m1d6nl1et"/><path class="ejct46bml"/><path class="yp_ly4b6g"/></g>`,
		"fallback": "andrsrxn:cable",
	});
}

export default Component;
