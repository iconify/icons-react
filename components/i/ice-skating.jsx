import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mt6-5jbev.css';
import '../../css/w/wyv4swb6z.css';
import '../../css/b/b0le1zb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mt6-5jbev"/><path class="wyv4swb6z"/><path class="b0le1zb-x"/></g>`,
		"fallback": "hugeicons:ice-skating",
	});
}

export default Component;
