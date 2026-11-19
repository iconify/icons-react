import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a9qxn-gfz.css';
import '../../css/o/ojz1sdvjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a9qxn-gfz"/><path class="ojz1sdvjy"/></g>`,
		"fallback": "andrsrxn:engine",
	});
}

export default Component;
