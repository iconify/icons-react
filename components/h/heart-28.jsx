import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pz44-xb6y.css';
import '../../css/t/t8ka7ccve.css';
import '../../css/p/pcsmsxbuw.css';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGqlKPUbDC)" class="pz44-xb6y"/><defs><linearGradient id="SVGqlKPUbDC" x1="-3.25" x2="9.612" y1="-2" y2="24.98" gradientUnits="userSpaceOnUse"><stop class="t8ka7ccve"/><stop offset="1" class="pcsmsxbuw"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:heart-28",
	});
}

export default Component;
