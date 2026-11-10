import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/raijdkbtr.css';
import '../../css/x/xvulmum9n.css';
import '../../css/k/k1l0ftbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="raijdkbtr"/><path class="xvulmum9n"/><path class="k1l0ftbhb"/></g>`,
		"fallback": "andrsrxn:dice-four",
	});
}

export default Component;
