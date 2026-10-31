import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nwzxboj1e.css';
import '../../css/a/ah77tub-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nwzxboj1e"/><path class="ah77tub-x"/></g>`,
		"fallback": "coolicons:divide-bulk-round",
	});
}

export default Component;
