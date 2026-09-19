import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bl_bbvree.css';
import '../../css/d/d_f-eacky.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bl_bbvree"/><path class="d_f-eacky"/></g>`,
		"fallback": "bi:badge-hd-fill",
	});
}

export default Component;
