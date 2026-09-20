import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tiiyrjvgi.css';
import '../../css/p/pv1rl1bal.css';
import '../../css/a/adqqsio1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tiiyrjvgi"/><path class="pv1rl1bal"/><path class="adqqsio1k"/></g>`,
		"fallback": "solar:atom-bold-duotone",
	});
}

export default Component;
