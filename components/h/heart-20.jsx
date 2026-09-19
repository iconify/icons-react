import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rxkw700ca.css';
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
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGMyPpXd5o)" class="rxkw700ca"/><defs><linearGradient id="SVGMyPpXd5o" x1="-1.5" x2="7.075" y1="-1" y2="16.987" gradientUnits="userSpaceOnUse"><stop class="t8ka7ccve"/><stop offset="1" class="pcsmsxbuw"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:heart-20",
	});
}

export default Component;
