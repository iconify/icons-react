import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cxpuwx3ez.css';
import '../../css/g/gntp3qz0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cxpuwx3ez"/><path class="gntp3qz0n"/></g>`,
		"fallback": "pixelarticons:arrow-up-z-a-sharp",
	});
}

export default Component;
