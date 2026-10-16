import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/okw4ymbej.css';
import '../../css/y/yzp6ufpti.css';
import '../../css/h/ho2nv5k5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="okw4ymbej"/><path class="yzp6ufpti"/><path class="ho2nv5k5e"/></g>`,
		"fallback": "andrsrxn:cent-circle",
	});
}

export default Component;
