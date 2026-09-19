import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/p/p_sf63brj.css';
import '../../css/y/y57fjzbtm.css';
import '../../css/g/g9fgs_cad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="p_sf63brj"/><path class="y57fjzbtm"/><path class="g9fgs_cad"/></g>`,
		"fallback": "humbleicons:code",
	});
}

export default Component;
