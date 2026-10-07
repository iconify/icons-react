import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nxif8vb_i.css';
import '../../css/n/nifftrboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nxif8vb_i"/><path class="nifftrboj"/></g>`,
		"fallback": "wordpress:filter",
	});
}

export default Component;
