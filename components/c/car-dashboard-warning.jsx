import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/stv5w1u0d.css';
import '../../css/d/dyz-llthy.css';
import '../../css/x/x0b8uui8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="stv5w1u0d"/><path class="dyz-llthy"/><path class="x0b8uui8o"/></g>`,
		"fallback": "streamline-ultimate:car-dashboard-warning",
	});
}

export default Component;
