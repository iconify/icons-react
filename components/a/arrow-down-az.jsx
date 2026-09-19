import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q82nqac1n.css';
import '../../css/q/q216lxbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q82nqac1n"/><path class="q216lxbek"/></g>`,
		"fallback": "hugeicons:arrow-down-az",
	});
}

export default Component;
