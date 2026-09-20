import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jcoj4fy-b.css';
import '../../css/c/cvpx22-id.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jcoj4fy-b"/><path class="cvpx22-id"/></g>`,
		"fallback": "reicon:course-up-duotone",
	});
}

export default Component;
