import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fj3vybale.css';
import '../../css/l/l-1ucdbni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fj3vybale"/><path class="l-1ucdbni"/></g>`,
		"fallback": "keyline-icons:circle-user-sharp",
	});
}

export default Component;
