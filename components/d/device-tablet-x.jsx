import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvv4a8b1q.css';
import '../../css/x/x10nznbcw.css';
import '../../css/x/xtyg9db9j.css';
import '../../css/h/hk04vm_3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mvv4a8b1q"/><path class="x10nznbcw"/><path class="xtyg9db9j"/><path class="hk04vm_3c"/></g>`,
		"fallback": "andrsrxn:device-tablet-x",
	});
}

export default Component;
