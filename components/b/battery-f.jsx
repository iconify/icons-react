import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oa8x24byn.css';
import '../../css/n/nlz_nebpp.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oa8x24byn"/><path class="nlz_nebpp"/></g>`,
		"fallback": "jam:battery-f",
	});
}

export default Component;
