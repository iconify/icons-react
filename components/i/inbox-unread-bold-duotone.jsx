import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n9vomcc2d.css';
import '../../css/n/n5fjpab4o.css';
import '../../css/q/q90e-8amo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n9vomcc2d"/><path class="n5fjpab4o"/><path class="q90e-8amo"/></g>`,
		"fallback": "solar:inbox-unread-bold-duotone",
	});
}

export default Component;
