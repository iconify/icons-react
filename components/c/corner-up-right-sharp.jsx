import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/owo5a6b9z.css';
import '../../css/p/pu7trm1zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="owo5a6b9z"/><path class="pu7trm1zc"/></g>`,
		"fallback": "pixelarticons:corner-up-right-sharp",
	});
}

export default Component;
