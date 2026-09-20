import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oybjd3s2z.css';
import '../../css/t/turgpe-dg.css';
import '../../css/c/ccvr2ibtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oybjd3s2z"/><path class="turgpe-dg"/><path class="ccvr2ibtr"/></g>`,
		"fallback": "pixelarticons:arrows-horizontal",
	});
}

export default Component;
