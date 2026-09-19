import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mx4zanrdr.css';
import '../../css/q/q0k637blo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mx4zanrdr"/><path class="q0k637blo"/></g>`,
		"fallback": "bi:8-square-fill",
	});
}

export default Component;
