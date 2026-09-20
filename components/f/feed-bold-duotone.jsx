import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a5r2czb2h.css';
import '../../css/j/jj-1tvbjg.css';
import '../../css/c/cc_c_n2ew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a5r2czb2h"/><path class="jj-1tvbjg"/><path class="cc_c_n2ew"/></g>`,
		"fallback": "solar:feed-bold-duotone",
	});
}

export default Component;
