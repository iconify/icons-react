import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h9wmnt92z.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/p/p3poopb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h9wmnt92z"/><path class="s1a2eew1e"/><path class="p3poopb-f"/></g>`,
		"fallback": "lucide-extended:calendar-1-duotone",
	});
}

export default Component;
