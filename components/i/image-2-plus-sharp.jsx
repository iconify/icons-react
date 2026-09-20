import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nrb1jkbwe.css';
import '../../css/x/xk3q5h34d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nrb1jkbwe"/><path class="xk3q5h34d"/></g>`,
		"fallback": "pixelarticons:image-2-plus-sharp",
	});
}

export default Component;
