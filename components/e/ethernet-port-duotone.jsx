import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uqd0fzcso.css';
import '../../css/a/a92oxlbtb.css';
import '../../css/z/zmz7s-z1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uqd0fzcso"/><path class="a92oxlbtb"/><path class="zmz7s-z1s"/></g>`,
		"fallback": "lucide-extended:ethernet-port-duotone",
	});
}

export default Component;
