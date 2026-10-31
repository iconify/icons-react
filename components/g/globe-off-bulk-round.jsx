import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tdibvxbty.css';
import '../../css/x/xiwo6v7ss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tdibvxbty"/><path class="xiwo6v7ss"/></g>`,
		"fallback": "coolicons:globe-off-bulk-round",
	});
}

export default Component;
