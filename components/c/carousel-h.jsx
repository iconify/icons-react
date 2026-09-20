import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q5aar_b_k.css';
import '../../css/n/niacd2j6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q5aar_b_k"/><path class="niacd2j6s"/></g>`,
		"fallback": "reicon:carousel-h",
	});
}

export default Component;
