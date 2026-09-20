import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2w4oo09i.css';
import '../../css/g/g_brsq-uk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f2w4oo09i"/><path class="g_brsq-uk"/></g>`,
		"fallback": "rivet-icons:chat",
	});
}

export default Component;
