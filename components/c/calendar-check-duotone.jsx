import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k_94w8q1x.css';
import '../../css/p/p3poopb-f.css';
import '../../css/q/qe4-jab0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k_94w8q1x"/><path class="p3poopb-f"/><path class="qe4-jab0b"/></g>`,
		"fallback": "lucide-extended:calendar-check-duotone",
	});
}

export default Component;
