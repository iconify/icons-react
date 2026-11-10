import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/raijdkbtr.css';
import '../../css/x/x3bkknt3r.css';
import '../../css/x/xvulmum9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="raijdkbtr"/><path class="x3bkknt3r"/><path class="xvulmum9n"/></g>`,
		"fallback": "andrsrxn:dice-six",
	});
}

export default Component;
