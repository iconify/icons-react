import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d4si3ibfl.css';
import '../../css/f/flc6uw_2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d4si3ibfl"/><path class="flc6uw_2g"/></g>`,
		"fallback": "pixelarticons:circle-square",
	});
}

export default Component;
