import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k_94w8q1x.css';
import '../../css/p/p3poopb-f.css';
import '../../css/d/dwta0cbnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k_94w8q1x"/><path class="p3poopb-f"/><path class="dwta0cbnk"/></g>`,
		"fallback": "lucide-extended:calendar-plus-2-duotone",
	});
}

export default Component;
