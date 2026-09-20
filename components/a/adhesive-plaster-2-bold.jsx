import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r0hev40-z.css';
import '../../css/e/e2dg-bbng.css';
import '../../css/a/a3vwh6b2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r0hev40-z"/><path clip-rule="evenodd" class="e2dg-bbng"/><path class="a3vwh6b2n"/></g>`,
		"fallback": "solar:adhesive-plaster-2-bold",
	});
}

export default Component;
