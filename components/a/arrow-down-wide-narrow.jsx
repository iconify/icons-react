import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pdtbr9bkn.css';
import '../../css/r/rx5ao3b3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pdtbr9bkn"/><path class="rx5ao3b3f"/></g>`,
		"fallback": "pixelarticons:arrow-down-wide-narrow",
	});
}

export default Component;
