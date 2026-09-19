import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fy2xa7b_n.css';
import '../../css/k/kgw-brc8a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fy2xa7b_n"/><path class="kgw-brc8a"/></g>`,
		"fallback": "fluent-emoji-high-contrast:desert",
	});
}

export default Component;
