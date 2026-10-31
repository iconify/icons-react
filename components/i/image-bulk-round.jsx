import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wr_1xqtvh.css';
import '../../css/d/dhm3_ccnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wr_1xqtvh"/><path class="dhm3_ccnd"/></g>`,
		"fallback": "coolicons:image-bulk-round",
	});
}

export default Component;
