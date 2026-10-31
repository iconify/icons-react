import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rminvdhlv.css';
import '../../css/p/p3poopb-f.css';
import '../../css/l/l7rc3p0id.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rminvdhlv"/><path class="p3poopb-f"/><path class="l7rc3p0id"/></g>`,
		"fallback": "lucide-extended:calendar-arrow-left-duotone",
	});
}

export default Component;
