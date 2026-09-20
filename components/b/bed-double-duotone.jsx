import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c95_x43_s.css';
import '../../css/r/rhh7ig_cv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c95_x43_s"/><path clip-rule="evenodd" class="rhh7ig_cv"/></g>`,
		"fallback": "keyline-icons:bed-double-duotone",
	});
}

export default Component;
