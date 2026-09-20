import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ei9xr0bfl.css';
import '../../css/r/r8r4r4bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ei9xr0bfl"/><path clip-rule="evenodd" class="r8r4r4bvx"/></g>`,
		"fallback": "solar:home-outline",
	});
}

export default Component;
