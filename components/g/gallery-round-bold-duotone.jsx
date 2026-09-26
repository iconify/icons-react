import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c0tsxrhtd.css';
import '../../css/d/d6gur6bsq.css';
import '../../css/y/y_8irlb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c0tsxrhtd"/><path clip-rule="evenodd" class="d6gur6bsq"/><path class="y_8irlb1x"/></g>`,
		"fallback": "solar:gallery-round-bold-duotone",
	});
}

export default Component;
