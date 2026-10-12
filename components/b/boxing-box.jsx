import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1yritb1r.css';
import '../../css/y/ynr4168sm.css';
import '../../css/y/y7jpj5biz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l1yritb1r"/><path class="ynr4168sm"/><path class="y7jpj5biz"/></g>`,
		"fallback": "andrsrxn:boxing-box",
	});
}

export default Component;
