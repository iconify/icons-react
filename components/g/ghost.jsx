import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zu8ebbbul.css';
import '../../css/n/n-5lvjb8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zu8ebbbul"/><path class="n-5lvjb8h"/></g>`,
		"fallback": "andrsrxn:ghost",
	});
}

export default Component;
