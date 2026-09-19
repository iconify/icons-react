import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pepj070ij.css';
import '../../css/e/elxcr8mci.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pepj070ij"/><path class="elxcr8mci"/></g>`,
		"fallback": "bi:fast-forward-fill",
	});
}

export default Component;
