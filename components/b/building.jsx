import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uk8g-gzde.css';
import '../../css/q/ql7o_fpqz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uk8g-gzde"/><path class="ql7o_fpqz"/></g>`,
		"fallback": "bi:building",
	});
}

export default Component;
