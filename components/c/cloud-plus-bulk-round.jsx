import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qq7y_sbgc.css';
import '../../css/z/zxhfeujqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qq7y_sbgc"/><path class="zxhfeujqd"/></g>`,
		"fallback": "coolicons:cloud-plus-bulk-round",
	});
}

export default Component;
