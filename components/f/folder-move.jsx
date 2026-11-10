import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/efktenb0c.css';
import '../../css/p/p-qjs1mwp.css';
import '../../css/h/h_8zc7bgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="efktenb0c"/><path class="p-qjs1mwp"/><path class="h_8zc7bgc"/></g>`,
		"fallback": "andrsrxn:folder-move",
	});
}

export default Component;
