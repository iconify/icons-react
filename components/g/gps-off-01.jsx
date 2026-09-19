import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jpl_0rwdp.css';
import '../../css/a/ar26nubux.css';
import '../../css/w/wc7iz8b7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jpl_0rwdp"/><path class="ar26nubux"/><path class="wc7iz8b7c"/></g>`,
		"fallback": "hugeicons:gps-off-01",
	});
}

export default Component;
