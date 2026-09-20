import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/esos5ccex.css';
import '../../css/g/gltd-e1ay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="esos5ccex"/><path class="gltd-e1ay"/></g>`,
		"fallback": "pixelarticons:cut-sharp",
	});
}

export default Component;
