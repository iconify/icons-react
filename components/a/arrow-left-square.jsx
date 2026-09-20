import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v5ordox1o.css';
import '../../css/y/y-8uw-nze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v5ordox1o"/><path clip-rule="evenodd" class="y-8uw-nze"/></g>`,
		"fallback": "reicon:arrow-left-square",
	});
}

export default Component;
