import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sjr9x5bay.css';
import '../../css/e/e4boz2bdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sjr9x5bay"/><path class="e4boz2bdl"/></g>`,
		"fallback": "coolicons:battery-empty-bulk-round",
	});
}

export default Component;
