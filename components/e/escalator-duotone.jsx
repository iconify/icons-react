import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u35gkwkug.css';
import '../../css/l/lk1rk0yta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary u35gkwkug"/><path class="lk1rk0yta primary"/></g>`,
		"fallback": "iconaut:escalator-duotone",
	});
}

export default Component;
