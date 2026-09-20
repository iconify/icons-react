import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv_vv6bcm.css';
import '../../css/f/fe1xdgb8o.css';
import '../../css/n/nxo_13i2d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv_vv6bcm"><path class="fe1xdgb8o"/><path class="nxo_13i2d"/></g>`,
		"fallback": "sidekickicons:arrow-path-clock-20-solid",
	});
}

export default Component;
