import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rr2tjjbgp.css';
import '../../css/y/ygd-e39li.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="rr2tjjbgp"/><path class="ygd-e39li"/></g>`,
		"fallback": "lets-icons:chart-duotone",
	});
}

export default Component;
