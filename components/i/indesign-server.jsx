import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pku2i0ble.css';
import '../../css/s/s8oobkb6p.css';
import '../../css/j/jmon4qjrz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGmAhx2dHO)"><path class="pku2i0ble"/><path class="s8oobkb6p"/></g><defs><clipPath id="SVGmAhx2dHO"><path class="jmon4qjrz"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:indesign-server",
	});
}

export default Component;
