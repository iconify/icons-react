import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aprqnrbwu.css';
import '../../css/w/w0ez89ben.css';
import '../../css/r/refb60b5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aprqnrbwu"/><path class="w0ez89ben"/><path class="refb60b5t"/></g>`,
		"fallback": "lucide-extended:droplets-duotone",
	});
}

export default Component;
