import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-e7l_bzn.css';
import '../../css/o/ogtx-vstl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u-e7l_bzn"/><path class="ogtx-vstl"/></g>`,
		"fallback": "mynaui:book-image-solid",
	});
}

export default Component;
