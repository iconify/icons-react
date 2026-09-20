import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bspj2u0td.css';
import '../../css/c/cuytl5bgh.css';
import '../../css/w/wat-0tb8a.css';
import '../../css/j/jwuxyw18e.css';
import '../../css/p/p4wackbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bspj2u0td"/><path class="cuytl5bgh"/><path class="wat-0tb8a"/><path class="jwuxyw18e"/><path class="p4wackbxx"/></g>`,
		"fallback": "solar:cart-5-line-duotone",
	});
}

export default Component;
