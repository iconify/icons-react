import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/td1q6q8ud.css';
import '../../css/o/oid4o9npl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="td1q6q8ud"/><path class="oid4o9npl"/></g>`,
		"fallback": "andrsrxn:device-phone-check",
	});
}

export default Component;
