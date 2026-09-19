import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jlimnph7j.css';
import '../../css/y/y3145xb5z.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="jlimnph7j"/><path class="y3145xb5z"/></g>`,
		"fallback": "foundation:female",
	});
}

export default Component;
