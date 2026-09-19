import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r4f-rbb3p.css';
import '../../css/o/or62bbc5c.css';
import '../../css/u/ufz0b2bzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="r4f-rbb3p"/><path class="or62bbc5c"/><path class="ufz0b2bzb"/></g>`,
		"fallback": "hugeicons:caduceus",
	});
}

export default Component;
