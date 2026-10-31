import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jj1qo1bpb.css';
import '../../css/f/fz-3uemrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jj1qo1bpb"/><path class="fz-3uemrr"/></g>`,
		"fallback": "coolicons:cactus-bulk-round",
	});
}

export default Component;
