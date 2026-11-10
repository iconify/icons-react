import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t8466ebvv.css';
import '../../css/y/ygua4cbgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t8466ebvv"/><path class="ygua4cbgr"/></g>`,
		"fallback": "andrsrxn:device-phone-check",
	});
}

export default Component;
