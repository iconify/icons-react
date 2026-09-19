import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u15rz-bsq.css';
import '../../css/x/xt_qxcbru.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u15rz-bsq"/><path class="xt_qxcbru"/></g>`,
		"fallback": "bi:eye-slash-fill",
	});
}

export default Component;
