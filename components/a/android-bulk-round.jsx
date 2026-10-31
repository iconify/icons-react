import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k27y2achw.css';
import '../../css/n/nnv2zhbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k27y2achw"/><path class="nnv2zhbko"/></g>`,
		"fallback": "coolicons:android-bulk-round",
	});
}

export default Component;
