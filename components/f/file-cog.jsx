import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/akk7aub-y.css';
import '../../css/r/rku94cw-v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="akk7aub-y"/><path class="rku94cw-v"/></g>`,
		"fallback": "at-icons:file-cog",
	});
}

export default Component;
