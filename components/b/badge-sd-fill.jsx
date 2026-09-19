import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/us0v15b6o.css';
import '../../css/r/rj7231b3s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="us0v15b6o"/><path class="rj7231b3s"/></g>`,
		"fallback": "bi:badge-sd-fill",
	});
}

export default Component;
