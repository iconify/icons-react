import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rlitoibdi.css';
import '../../css/r/rm-z7ybxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rlitoibdi"/><path class="rm-z7ybxs"/></g>`,
		"fallback": "coolicons:cursor-duotone-round",
	});
}

export default Component;
