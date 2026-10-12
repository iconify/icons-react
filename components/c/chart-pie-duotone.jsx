import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2lcyxzyt.css';
import '../../css/r/rz0q3eb5l.css';
import '../../css/u/u1dt7ccjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f2lcyxzyt"/><path class="rz0q3eb5l"/><path class="u1dt7ccjc"/></g>`,
		"fallback": "lucide-extended:chart-pie-duotone",
	});
}

export default Component;
