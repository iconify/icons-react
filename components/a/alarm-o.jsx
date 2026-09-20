import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn9fr8b3o.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ihb1zyblr.css';
import '../../css/r/r4rt3pp1f.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn9fr8b3o"/><g class="cuyn6tgcc"><path class="ihb1zyblr"/><path class="r4rt3pp1f"/></g>`,
		"fallback": "iwwa:alarm-o",
	});
}

export default Component;
