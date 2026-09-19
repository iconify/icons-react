import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ukvosce6q.css';
import '../../css/y/ykyeobbwg.css';
import '../../css/h/h3rixiekm.css';
import '../../css/a/a7cb7nrdi.css';
import '../../css/y/yqjeyqbus.css';
import '../../css/g/gk8gx7whk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGZlGEh56m)" class="ukvosce6q"/><path fill="url(#SVGUPAv2aTZ)" class="ykyeobbwg"/><defs><linearGradient id="SVGZlGEh56m" x1="16" x2="16.026" y1="22.857" y2="27.999" gradientUnits="userSpaceOnUse"><stop class="h3rixiekm"/><stop offset="1" class="a7cb7nrdi"/></linearGradient><linearGradient id="SVGUPAv2aTZ" x1="24.243" x2="8.48" y1="20.889" y2="5.769" gradientUnits="userSpaceOnUse"><stop class="yqjeyqbus"/><stop offset="1" class="gk8gx7whk"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:alert-32",
	});
}

export default Component;
