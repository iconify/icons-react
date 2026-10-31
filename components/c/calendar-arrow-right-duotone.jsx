import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oozgcpf-n.css';
import '../../css/k/kr2yck1he.css';
import '../../css/p/p3poopb-f.css';
import '../../css/w/w1g7mvbrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oozgcpf-n"/><path class="kr2yck1he"/><path class="p3poopb-f"/><path class="w1g7mvbrf"/></g>`,
		"fallback": "lucide-extended:calendar-arrow-right-duotone",
	});
}

export default Component;
