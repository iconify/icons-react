import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hl-yb4s0v.css';
import '../../css/g/g4pqkcclt.css';
import '../../css/r/rfjwc7d-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hl-yb4s0v"/><path clip-rule="evenodd" class="g4pqkcclt"/><path class="rfjwc7d-i"/></g>`,
		"fallback": "majesticons:browser-cookie",
	});
}

export default Component;
