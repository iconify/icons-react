import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gczd21yen.css';
import '../../css/d/d_1trlb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gczd21yen"/><path class="d_1trlb-p"/></g>`,
		"fallback": "andrsrxn:device-phone-x",
	});
}

export default Component;
