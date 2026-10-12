import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ugryot79h.css';
import '../../css/s/sxlzwnbkm.css';
import '../../css/w/wj1uu9bbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ugryot79h"/><path class="sxlzwnbkm"/><path class="wj1uu9bbx"/></g>`,
		"fallback": "lucide-extended:briefcase-conveyor-belt-duotone",
	});
}

export default Component;
