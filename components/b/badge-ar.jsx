import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cn667q_jn.css';
import '../../css/h/h32ym5bol.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cn667q_jn"/><path class="h32ym5bol"/></g>`,
		"fallback": "bi:badge-ar",
	});
}

export default Component;
