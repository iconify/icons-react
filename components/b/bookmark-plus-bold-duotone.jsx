import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uwx53c8ik.css';
import '../../css/d/dyra7tbhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uwx53c8ik"/><path class="dyra7tbhs"/></g>`,
		"fallback": "solar:bookmark-plus-bold-duotone",
	});
}

export default Component;
