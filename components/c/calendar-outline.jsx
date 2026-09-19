import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/kg0z_nz0n.css';
import '../../css/h/hq6medc3z.css';
import '../../css/e/e3paigb_o.css';
import '../../css/f/fyb61ow7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="kg0z_nz0n"/><path class="hq6medc3z"/><path class="e3paigb_o"/><path class="fyb61ow7b"/></g>`,
		"fallback": "bitcoin-icons:calendar-outline",
	});
}

export default Component;
