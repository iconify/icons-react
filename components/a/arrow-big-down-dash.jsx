import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qz0-nbcyt.css';
import '../../css/a/az6yz7btl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qz0-nbcyt"/><path class="az6yz7btl"/></g>`,
		"fallback": "pixelarticons:arrow-big-down-dash",
	});
}

export default Component;
