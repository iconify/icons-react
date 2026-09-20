import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/epm6m9bbq.css';
import '../../css/k/k4zpahbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="epm6m9bbq"/><path class="k4zpahbdz"/></g>`,
		"fallback": "keyline-icons:bar-chart-sharp-duotone",
	});
}

export default Component;
