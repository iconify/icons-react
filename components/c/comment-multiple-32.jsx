import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pcp2dq4ye.css';
import '../../css/z/za2dyjz7e.css';
import '../../css/f/fk3i-830m.css';
import '../../css/h/h0zqot9pw.css';
import '../../css/n/npyhkyrja.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pcp2dq4ye"/><path fill="url(#SVG7w4sGcWZ)" class="za2dyjz7e"/><defs><radialGradient id="SVG7w4sGcWZ" cx="0" cy="0" r="1" gradientTransform="rotate(49.563 -1.071 -2.537)scale(42.5349 76.6209)" gradientUnits="userSpaceOnUse"><stop class="fk3i-830m"/><stop offset=".535" class="h0zqot9pw"/><stop offset="1" class="npyhkyrja"/></radialGradient></defs></g>`,
		"fallback": "fluent-color:comment-multiple-32",
	});
}

export default Component;
