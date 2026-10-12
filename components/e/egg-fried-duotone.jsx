import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u00_rtbnv.css';
import '../../css/n/n14y29_sm.css';
import '../../css/j/j4y2ez72j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u00_rtbnv"/><path class="n14y29_sm"/><path class="j4y2ez72j"/></g>`,
		"fallback": "lucide-extended:egg-fried-duotone",
	});
}

export default Component;
