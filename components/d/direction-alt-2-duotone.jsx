import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rvsqqi2_z.css';
import '../../css/r/rwob_xidq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rvsqqi2_z"/><path class="rwob_xidq"/></g>`,
		"fallback": "lets-icons:direction-alt-2-duotone",
	});
}

export default Component;
