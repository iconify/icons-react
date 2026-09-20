import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bspj2u0td.css';
import '../../css/j/jcgk1oq8u.css';
import '../../css/e/ez9s5bbgy.css';
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
		"content": `<g class="ipq1z-bjh"><path class="bspj2u0td"/><path class="jcgk1oq8u"/><path class="ez9s5bbgy"/><path class="jwuxyw18e"/><path class="p4wackbxx"/></g>`,
		"fallback": "solar:cart-4-line-duotone",
	});
}

export default Component;
