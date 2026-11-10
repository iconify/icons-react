import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ndldc9j7n.css';
import '../../css/m/mrlfrqrvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ndldc9j7n"/><path class="mrlfrqrvb"/></g>`,
		"fallback": "andrsrxn:haptic-off",
	});
}

export default Component;
