import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f92glpbgh.css';
import '../../css/v/vlltvh_6f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f92glpbgh"/><path class="vlltvh_6f"/></g>`,
		"fallback": "bi:cart-x",
	});
}

export default Component;
