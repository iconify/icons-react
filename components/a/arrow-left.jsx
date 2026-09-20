import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ab8kroy2q.css';
import '../../css/x/x5cjadbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ab8kroy2q"/><path class="x5cjadbud"/></g>`,
		"fallback": "pixelarticons:arrow-left",
	});
}

export default Component;
