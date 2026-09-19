import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2dkog-os.css';
import '../../css/l/la4z86s2j.css';
import '../../css/h/h3rixiekm.css';
import '../../css/h/h32uy_wuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVG3WigfAtK)" class="u2dkog-os"/><path fill="url(#SVG2042Dhzi)" class="la4z86s2j"/><defs><radialGradient id="SVG2042Dhzi" cx="0" cy="0" r="1" gradientTransform="matrix(0 -11.5714 17.6 0 12.611 12.143)" gradientUnits="userSpaceOnUse"><stop class="h3rixiekm"/><stop offset="1" class="h32uy_wuf"/></radialGradient><linearGradient id="SVG3WigfAtK" x1="8.329" x2="13.266" y1="11.462" y2="21.495" gradientUnits="userSpaceOnUse"><stop offset=".125" class="h32uy_wuf"/><stop offset="1" class="h3rixiekm"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:animal-paw-print-24",
	});
}

export default Component;
