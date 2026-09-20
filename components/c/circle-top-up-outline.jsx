import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pulprnf5v.css';
import '../../css/m/myr9jib4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pulprnf5v"/><path class="myr9jib4d"/></g>`,
		"fallback": "solar:circle-top-up-outline",
	});
}

export default Component;
