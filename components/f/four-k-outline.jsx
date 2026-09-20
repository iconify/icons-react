import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ysf8iib-w.css';
import '../../css/p/pb6m-olvp.css';
import '../../css/b/bbrv0_ogo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ysf8iib-w"/><path class="pb6m-olvp"/><path clip-rule="evenodd" class="bbrv0_ogo"/></g>`,
		"fallback": "solar:four-k-outline",
	});
}

export default Component;
