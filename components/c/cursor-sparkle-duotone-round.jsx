import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e7em_11cg.css';
import '../../css/h/h2ti_vbuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e7em_11cg"/><path class="h2ti_vbuq"/></g>`,
		"fallback": "coolicons:cursor-sparkle-duotone-round",
	});
}

export default Component;
