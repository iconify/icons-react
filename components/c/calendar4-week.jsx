import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rp6m0ubcf.css';
import '../../css/h/h24u46eyw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rp6m0ubcf"/><path class="h24u46eyw"/></g>`,
		"fallback": "bi:calendar4-week",
	});
}

export default Component;
