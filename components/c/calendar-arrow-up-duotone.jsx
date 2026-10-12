import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nemgs-bvb.css';
import '../../css/z/z3eqn8bxs.css';
import '../../css/p/p3poopb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nemgs-bvb"/><path class="z3eqn8bxs"/><path class="p3poopb-f"/></g>`,
		"fallback": "lucide-extended:calendar-arrow-up-duotone",
	});
}

export default Component;
