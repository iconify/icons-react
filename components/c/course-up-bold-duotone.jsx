import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ch1uvsfta.css';
import '../../css/w/wmbtgmywk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ch1uvsfta"/><path class="wmbtgmywk"/></g>`,
		"fallback": "solar:course-up-bold-duotone",
	});
}

export default Component;
