import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/suz3f6b8m.css';
import '../../css/k/khay96b3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="suz3f6b8m"/><path class="khay96b3w"/></g>`,
		"fallback": "coolicons:arrow-up-to-line-bulk-round",
	});
}

export default Component;
