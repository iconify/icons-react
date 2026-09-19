import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ylzkibcci.css';
import '../../css/e/eryvokbxb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ylzkibcci"/><path class="eryvokbxb"/></g>`,
		"fallback": "bi:easel2-fill",
	});
}

export default Component;
