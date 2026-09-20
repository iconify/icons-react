import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zxkp_l4am.css';
import '../../css/n/nn73-6cso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zxkp_l4am"/><path class="nn73-6cso"/></g>`,
		"fallback": "pixelarticons:ai-file-sharp",
	});
}

export default Component;
