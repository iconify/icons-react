import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e8f_t6izd.css';
import '../../css/p/pvd6u4yzv.css';
import '../../css/b/b2_d91zpb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e8f_t6izd"/><path class="pvd6u4yzv"/><path clip-rule="evenodd" class="b2_d91zpb"/></g>`,
		"fallback": "pepicons:eye",
	});
}

export default Component;
