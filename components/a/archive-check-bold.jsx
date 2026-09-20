import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t62prfb1d.css';
import '../../css/a/ax_ecdbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t62prfb1d"/><path class="ax_ecdbka"/></g>`,
		"fallback": "solar:archive-check-bold",
	});
}

export default Component;
