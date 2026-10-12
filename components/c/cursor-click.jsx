import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ccmpgo8li.css';
import '../../css/z/z4duum5dy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ccmpgo8li"/><path class="z4duum5dy"/></g>`,
		"fallback": "andrsrxn:cursor-click",
	});
}

export default Component;
