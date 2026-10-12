import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f05yqackh.css';
import '../../css/v/vuv-vubvh.css';
import '../../css/w/wnplm3jvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f05yqackh"/><path class="vuv-vubvh"/><path class="wnplm3jvw"/></g>`,
		"fallback": "andrsrxn:bell-check",
	});
}

export default Component;
