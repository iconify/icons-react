import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sjr9x5bay.css';
import '../../css/v/v-6q2uxkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sjr9x5bay"/><path class="v-6q2uxkc"/></g>`,
		"fallback": "coolicons:battery-charging-bulk-round",
	});
}

export default Component;
