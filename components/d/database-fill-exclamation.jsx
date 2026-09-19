import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k1ay2cgzn.css';
import '../../css/w/wuztmgkkn.css';
import '../../css/f/fc631pbzq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k1ay2cgzn"/><path class="wuztmgkkn"/><path class="fc631pbzq"/></g>`,
		"fallback": "bi:database-fill-exclamation",
	});
}

export default Component;
