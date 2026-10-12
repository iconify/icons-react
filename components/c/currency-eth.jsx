import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n7zhc8mgl.css';
import '../../css/r/r6sk4cbzq.css';
import '../../css/w/w-gk8o20v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n7zhc8mgl"/><path class="r6sk4cbzq"/><path class="w-gk8o20v"/></g>`,
		"fallback": "andrsrxn:currency-eth",
	});
}

export default Component;
