import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vqswknbrr.css';
import '../../css/n/nxn6nwbdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vqswknbrr"/><path class="nxn6nwbdf"/></g>`,
		"fallback": "lucide-extended:grid-2x2-duotone",
	});
}

export default Component;
