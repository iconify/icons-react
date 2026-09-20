import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yi0mtob8m.css';
import '../../css/s/sbhq7175x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yi0mtob8m"/><path class="sbhq7175x"/></g>`,
		"fallback": "rivet-icons:clipboard",
	});
}

export default Component;
