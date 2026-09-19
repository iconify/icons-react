import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xri9hmb6b.css';
import '../../css/k/klchnxb0j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xri9hmb6b"/><path class="klchnxb0j"/></g>`,
		"fallback": "pepicons:angle-down",
	});
}

export default Component;
