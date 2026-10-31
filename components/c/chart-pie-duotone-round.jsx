import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sewq2pj7s.css';
import '../../css/c/c3ihy8bey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sewq2pj7s"/><path class="c3ihy8bey"/></g>`,
		"fallback": "coolicons:chart-pie-duotone-round",
	});
}

export default Component;
