import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fewyzyx4s.css';
import '../../css/x/xyb3rkwws.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fewyzyx4s"/><path class="xyb3rkwws"/></g>`,
		"fallback": "fluent-emoji-high-contrast:flying-saucer",
	});
}

export default Component;
