import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mli_71b5j.css';
import '../../css/f/fm3ij2bty.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mli_71b5j"/><path class="fm3ij2bty"/></g>`,
		"fallback": "bi:heart-pulse",
	});
}

export default Component;
