import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v6_r5ub0p.css';
import '../../css/v/v9h7snvir.css';
import '../../css/d/dtw45jbrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v6_r5ub0p"/><path class="v9h7snvir"/><path class="dtw45jbrd"/></g>`,
		"fallback": "lucide-extended:drill-duotone",
	});
}

export default Component;
