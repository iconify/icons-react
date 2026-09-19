import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h_l78yaxm.css';
import '../../css/g/grfmi1bfg.css';
import '../../css/p/p08hllbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><ellipse class="h_l78yaxm"/><path class="grfmi1bfg"/><path class="p08hllbsc"/></g>`,
		"fallback": "hugeicons:database-import",
	});
}

export default Component;
