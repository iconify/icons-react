import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bacwqsblm.css';
import '../../css/p/pu7trm1zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bacwqsblm"/><path class="pu7trm1zc"/></g>`,
		"fallback": "pixelarticons:corner-up-right",
	});
}

export default Component;
