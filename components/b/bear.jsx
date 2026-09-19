import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/ht2ug2ktl.css';
import '../../css/l/ll_xj9bvt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ht2ug2ktl"/><path class="ll_xj9bvt"/></g>`,
		"fallback": "fluent-emoji-high-contrast:bear",
	});
}

export default Component;
