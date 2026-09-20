import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ouo3q_epq.css';
import '../../css/f/fo_f5l8hd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ouo3q_epq"/><path class="fo_f5l8hd"/></g>`,
		"fallback": "lets-icons:basket-alt-duotone",
	});
}

export default Component;
