import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxc_bmehm.css';
import '../../css/p/pp942sb7j.css';
import '../../css/v/vpi7-ptsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yxc_bmehm"/><path class="pp942sb7j"/><path class="vpi7-ptsr"/></g>`,
		"fallback": "andrsrxn:chocolate-bar",
	});
}

export default Component;
