import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n8qm4jpqm.css';
import '../../css/t/t8ka7ccve.css';
import '../../css/p/pcsmsxbuw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGwrcVIFUc)" class="n8qm4jpqm"/><defs><linearGradient id="SVGwrcVIFUc" x1="4" x2="12.653" y1="3.357" y2="14.354" gradientUnits="userSpaceOnUse"><stop class="t8ka7ccve"/><stop offset="1" class="pcsmsxbuw"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:bookmark-20",
	});
}

export default Component;
