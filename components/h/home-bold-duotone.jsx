import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fbtth2tza.css';
import '../../css/e/ei9xr0bfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fbtth2tza"/><path class="ei9xr0bfl"/></g>`,
		"fallback": "solar:home-bold-duotone",
	});
}

export default Component;
