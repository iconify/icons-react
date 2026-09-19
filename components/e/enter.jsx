import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jjn3-wb-r.css';
import '../../css/l/lyhob32ax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jjn3-wb-r"/><path class="lyhob32ax"/></g>`,
		"fallback": "gg:enter",
	});
}

export default Component;
