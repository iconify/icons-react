import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/me0vubcni.css';
import '../../css/c/c5gjrp_1m.css';
import '../../css/a/a0a8b2bmr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVG35eD2idq)"><path class="me0vubcni"/><path class="c5gjrp_1m"/></g><defs><clipPath id="SVG35eD2idq"><rect class="a0a8b2bmr"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:coinbase",
	});
}

export default Component;
