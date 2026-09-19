import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kzyv51gtg.css';
import '../../css/u/ugeb46b0i.css';
import '../../css/h/h3rixiekm.css';
import '../../css/a/a7cb7nrdi.css';
import '../../css/y/yqjeyqbus.css';
import '../../css/g/gk8gx7whk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGLohkDdAP)" class="kzyv51gtg"/><path fill="url(#SVGemJWYbAG)" class="ugeb46b0i"/><defs><linearGradient id="SVGLohkDdAP" x1="8.013" x2="8.013" y1="11.5" y2="14" gradientUnits="userSpaceOnUse"><stop offset=".152" class="h3rixiekm"/><stop offset="1" class="a7cb7nrdi"/></linearGradient><linearGradient id="SVGemJWYbAG" x1="13.516" x2="3.879" y1="11.996" y2="3.325" gradientUnits="userSpaceOnUse"><stop class="yqjeyqbus"/><stop offset="1" class="gk8gx7whk"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:alert-16",
	});
}

export default Component;
