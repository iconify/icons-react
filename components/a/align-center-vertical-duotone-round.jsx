import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y02rsxs5k.css';
import '../../css/s/s-jbknb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y02rsxs5k"/><path class="s-jbknb7n"/></g>`,
		"fallback": "coolicons:align-center-vertical-duotone-round",
	});
}

export default Component;
