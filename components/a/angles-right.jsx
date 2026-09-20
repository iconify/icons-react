import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dc1nh6b4k.css';
import '../../css/z/z9isq-b1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dc1nh6b4k"/><path class="z9isq-b1l"/></g>`,
		"fallback": "reicon:angles-right",
	});
}

export default Component;
