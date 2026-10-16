import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgns7ccnz.css';
import '../../css/m/mp-ousb8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zgns7ccnz"/><path class="mp-ousb8u"/></g>`,
		"fallback": "andrsrxn:gamepad-directional-down",
	});
}

export default Component;
