import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u0bqxeb-g.css';
import '../../css/a/ax_ecdbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u0bqxeb-g"/><path class="ax_ecdbka"/></g>`,
		"fallback": "solar:archive-down-bold",
	});
}

export default Component;
