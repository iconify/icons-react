import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jj9dgh_2r.css';
import '../../css/c/ce49rjbla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jj9dgh_2r"/><path class="ce49rjbla"/></g>`,
		"fallback": "reicon:hand-stars-duotone",
	});
}

export default Component;
