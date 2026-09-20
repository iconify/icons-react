import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q02rdwntl.css';
import '../../css/z/z50m2_v_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q02rdwntl"/><path class="z50m2_v_n"/></g>`,
		"fallback": "solar:book-2-bold",
	});
}

export default Component;
