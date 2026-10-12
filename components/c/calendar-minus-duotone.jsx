import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bypxqzbgl.css';
import '../../css/p/p3poopb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bypxqzbgl"/><path class="p3poopb-f"/></g>`,
		"fallback": "lucide-extended:calendar-minus-duotone",
	});
}

export default Component;
