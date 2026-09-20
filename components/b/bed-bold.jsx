import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zi1833bza.css';
import '../../css/k/kt_9h6beg.css';
import '../../css/t/t9n961ban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zi1833bza"/><path class="kt_9h6beg"/><path clip-rule="evenodd" class="t9n961ban"/></g>`,
		"fallback": "solar:bed-bold",
	});
}

export default Component;
