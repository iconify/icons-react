import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/sh7hjab2q.css';
import '../../css/u/uf648griz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="sh7hjab2q"/><path class="uf648griz"/></g>`,
		"fallback": "keyline-icons:bed-sharp-two-tone",
	});
}

export default Component;
