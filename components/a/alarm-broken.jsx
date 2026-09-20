import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x_g6k5bwe.css';
import '../../css/x/x43s2zn6y.css';
import '../../css/p/pfllnjb4h.css';
import '../../css/c/cfw654b4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x_g6k5bwe"/><path class="x43s2zn6y"/><path class="pfllnjb4h"/><path class="cfw654b4b"/></g>`,
		"fallback": "solar:alarm-broken",
	});
}

export default Component;
