import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zn12e4o2k.css';
import '../../css/w/wi0qlkb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zn12e4o2k"/><path class="wi0qlkb1y"/></g>`,
		"fallback": "coolicons:droplet-duotone-round",
	});
}

export default Component;
