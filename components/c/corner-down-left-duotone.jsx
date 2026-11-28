import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ysnowqbxi.css';
import '../../css/d/d985gi3va.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary ysnowqbxi"/><path class="d985gi3va primary"/></g>`,
		"fallback": "iconaut:corner-down-left-duotone",
	});
}

export default Component;
