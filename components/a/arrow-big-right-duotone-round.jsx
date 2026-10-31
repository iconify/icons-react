import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/icceyhbcp.css';
import '../../css/g/g1gfpexae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="icceyhbcp"/><path class="g1gfpexae"/></g>`,
		"fallback": "coolicons:arrow-big-right-duotone-round",
	});
}

export default Component;
