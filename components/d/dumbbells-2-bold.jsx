import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fim29jbdh.css';
import '../../css/b/b3s04_brk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fim29jbdh"/><path class="b3s04_brk"/></g>`,
		"fallback": "solar:dumbbells-2-bold",
	});
}

export default Component;
