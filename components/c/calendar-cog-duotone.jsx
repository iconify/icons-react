import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vz550iwak.css';
import '../../css/p/p3poopb-f.css';
import '../../css/j/jiqekfbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vz550iwak"/><path class="p3poopb-f"/><path class="jiqekfbcd"/></g>`,
		"fallback": "lucide-extended:calendar-cog-duotone",
	});
}

export default Component;
