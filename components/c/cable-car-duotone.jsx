import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ooxgp_29n.css';
import '../../css/h/hsd86vbaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ooxgp_29n"/><path class="hsd86vbaf"/></g>`,
		"fallback": "lucide-extended:cable-car-duotone",
	});
}

export default Component;
