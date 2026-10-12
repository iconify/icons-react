import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oqjys_b8l.css';
import '../../css/n/ni913kbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oqjys_b8l"/><path class="ni913kbbh"/></g>`,
		"fallback": "lucide-extended:cookie-duotone",
	});
}

export default Component;
