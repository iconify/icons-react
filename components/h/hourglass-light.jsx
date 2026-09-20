import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hb6_k0b5d.css';
import '../../css/c/cfa0wcboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hb6_k0b5d"/><path class="cfa0wcboi"/></g>`,
		"fallback": "lets-icons:hourglass-light",
	});
}

export default Component;
