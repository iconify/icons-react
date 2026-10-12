import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qzbti9l4o.css';
import '../../css/h/hpdjubc8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qzbti9l4o"/><path class="hpdjubc8i"/></g>`,
		"fallback": "lucide-extended:cannabis-duotone",
	});
}

export default Component;
