import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3mskpk1i.css';
import '../../css/l/l97bdkbaw.css';
import '../../css/v/vypjx0bzc.css';
import '../../css/t/t_a4n6bgp.css';

const viewBox = {"width":257,"height":257};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect fill="url(#SVGYINIVczc)" class="i3mskpk1i"/><path class="l97bdkbaw"/><defs><linearGradient id="SVGYINIVczc" x1="128.5" x2="128.5" y2="257" gradientUnits="userSpaceOnUse"><stop class="vypjx0bzc"/><stop offset="1" class="t_a4n6bgp"/></linearGradient></defs>`,
		"fallback": "thesvg-color:chakra-ui",
	});
}

export default Component;
