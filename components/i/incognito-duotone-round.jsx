import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y6qnxz1tk.css';
import '../../css/s/sqi04ibqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y6qnxz1tk"/><path class="sqi04ibqn"/></g>`,
		"fallback": "coolicons:incognito-duotone-round",
	});
}

export default Component;
