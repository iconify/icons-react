import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_jwh6b_z.css';
import '../../css/w/wfg-fvvzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q_jwh6b_z"/><path class="wfg-fvvzd"/></g>`,
		"fallback": "coolicons:cloud-sun-duotone-round",
	});
}

export default Component;
