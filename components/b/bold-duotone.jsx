import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vh_hv9bgh.css';
import '../../css/t/tf2_hbigc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vh_hv9bgh"/><path class="tf2_hbigc"/></g>`,
		"fallback": "si:bold-duotone",
	});
}

export default Component;
