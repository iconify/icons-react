import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cxpuwx3ez.css';
import '../../css/h/hzb55op6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cxpuwx3ez"/><path class="hzb55op6p"/></g>`,
		"fallback": "pixelarticons:arrow-up-z-a",
	});
}

export default Component;
