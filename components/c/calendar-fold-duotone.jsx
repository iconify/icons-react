import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y3awupb5n.css';
import '../../css/p/p3poopb-f.css';
import '../../css/h/hxngk6b1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y3awupb5n"/><path class="p3poopb-f"/><path class="hxngk6b1m"/></g>`,
		"fallback": "lucide-extended:calendar-fold-duotone",
	});
}

export default Component;
