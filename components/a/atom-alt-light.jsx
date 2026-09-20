import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/d/dcgw77bis.css';
import '../../css/y/y4si8vbaw.css';
import '../../css/p/pusscp3cq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="dcgw77bis"/><path class="y4si8vbaw"/><path class="pusscp3cq"/></g>`,
		"fallback": "lets-icons:atom-alt-light",
	});
}

export default Component;
