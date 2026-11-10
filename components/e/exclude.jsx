import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ejvrojb0s.css';
import '../../css/s/s9k96rx5w.css';
import '../../css/l/lwlj3y_5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ejvrojb0s"/><path class="s9k96rx5w"/><path class="lwlj3y_5l"/></g>`,
		"fallback": "andrsrxn:exclude",
	});
}

export default Component;
