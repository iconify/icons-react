import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t713w4bax.css';
import '../../css/d/d51rrrlde.css';
import '../../css/p/p3poopb-f.css';
import '../../css/i/iom5okjco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t713w4bax"/><path class="d51rrrlde"/><path class="p3poopb-f"/><path class="iom5okjco"/></g>`,
		"fallback": "lucide-extended:calendar-chevrons-left-duotone",
	});
}

export default Component;
