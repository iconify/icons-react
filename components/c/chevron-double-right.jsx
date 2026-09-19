import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wy9zr1bah.css';
import '../../css/s/s9b3okb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wy9zr1bah"/><path class="s9b3okb7t"/></g>`,
		"fallback": "gg:chevron-double-right",
	});
}

export default Component;
