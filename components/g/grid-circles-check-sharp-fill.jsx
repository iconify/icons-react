import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/r1wx7gbmu.css';
import '../../css/y/ybne7tbev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="r1wx7gbmu"/><path class="ybne7tbev"/></g>`,
		"fallback": "keyline-icons:grid-circles-check-sharp-fill",
	});
}

export default Component;
