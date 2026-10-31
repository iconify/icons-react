import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e1pwzwbnl.css';
import '../../css/d/di3-vtcvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e1pwzwbnl"/><path class="di3-vtcvq"/></g>`,
		"fallback": "coolicons:bell-dot-bulk-round",
	});
}

export default Component;
