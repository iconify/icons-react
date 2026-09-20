import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l-1ucdbni.css';
import '../../css/w/w5-w_sbbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="l-1ucdbni"/><path class="w5-w_sbbd"/></g>`,
		"fallback": "keyline-icons:circle-x-sharp",
	});
}

export default Component;
