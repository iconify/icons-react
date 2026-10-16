import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wk2cp-ech.css';
import '../../css/f/f2kyq5bea.css';
import '../../css/i/icb6e6yja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="wk2cp-ech"/><rect class="f2kyq5bea"/><path class="icb6e6yja"/></g>`,
		"fallback": "andrsrxn:device-pc-activity",
	});
}

export default Component;
