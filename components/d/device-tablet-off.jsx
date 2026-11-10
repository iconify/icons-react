import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqgd8mbhr.css';
import '../../css/w/w1exds01h.css';
import '../../css/x/xtyg9db9j.css';
import '../../css/v/vfgwdwb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aqgd8mbhr"/><path class="w1exds01h"/><path class="xtyg9db9j"/><path class="vfgwdwb6h"/></g>`,
		"fallback": "andrsrxn:device-tablet-off",
	});
}

export default Component;
