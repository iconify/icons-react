import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u18q8pm0e.css';
import '../../css/y/y0de9ac7y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u18q8pm0e"/><path class="y0de9ac7y"/></g>`,
		"fallback": "at-icons:golf-hole",
	});
}

export default Component;
