import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rwv7d3bso.css';
import '../../css/h/h_xy_abro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rwv7d3bso"/><path class="h_xy_abro"/></g>`,
		"fallback": "hugeicons:allah",
	});
}

export default Component;
