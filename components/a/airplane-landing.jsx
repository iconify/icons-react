import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h87n4d6xw.css';
import '../../css/t/tp56ji7um.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h87n4d6xw"/><path class="tp56ji7um"/></g>`,
		"fallback": "andrsrxn:airplane-landing",
	});
}

export default Component;
