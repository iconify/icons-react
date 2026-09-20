import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pdtbr9bkn.css';
import '../../css/k/k-p3--bll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pdtbr9bkn"/><path class="k-p3--bll"/></g>`,
		"fallback": "pixelarticons:arrow-down-narrow-wide",
	});
}

export default Component;
