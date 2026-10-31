import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a8x_c68up.css';
import '../../css/w/wnj1uynva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a8x_c68up"/><path class="wnj1uynva"/></g>`,
		"fallback": "coolicons:instagram-bulk-round",
	});
}

export default Component;
