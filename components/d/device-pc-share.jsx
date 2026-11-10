import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvxc0bb1x.css';
import '../../css/l/l8wp8e44y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pvxc0bb1x"/><path class="l8wp8e44y"/></g>`,
		"fallback": "andrsrxn:device-pc-share",
	});
}

export default Component;
