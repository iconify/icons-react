import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m2ly5xbum.css';
import '../../css/s/s5okhf7bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m2ly5xbum"/><path class="s5okhf7bz"/></g>`,
		"fallback": "pixelarticons:avatar-circle-minus",
	});
}

export default Component;
