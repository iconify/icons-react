import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zi5dy1bvd.css';
import '../../css/n/njfn9jsbh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zi5dy1bvd"/><path class="njfn9jsbh"/></g>`,
		"fallback": "bi:badge-3d-fill",
	});
}

export default Component;
