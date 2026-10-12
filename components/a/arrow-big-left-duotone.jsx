import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pb9ey0r5s.css';
import '../../css/f/fmmm0wh9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pb9ey0r5s"/><path class="fmmm0wh9f"/></g>`,
		"fallback": "lucide-extended:arrow-big-left-duotone",
	});
}

export default Component;
