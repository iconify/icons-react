import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nas9t29dg.css';
import '../../css/m/m8wm8-4uy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nas9t29dg"/><path class="m8wm8-4uy"/></g>`,
		"fallback": "coolicons:bell-dot-duotone-round",
	});
}

export default Component;
