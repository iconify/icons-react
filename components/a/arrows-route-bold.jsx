import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x-cnl0qxl.css';
import '../../css/c/c5zqifb9x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x-cnl0qxl"/><path class="c5zqifb9x"/></g>`,
		"fallback": "glyphs:arrows-route-bold",
	});
}

export default Component;
