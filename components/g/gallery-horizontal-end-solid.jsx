import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yh9v1pbfe.css';
import '../../css/a/aygt41b5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yh9v1pbfe"/><path class="aygt41b5l"/></g>`,
		"fallback": "iconaut:gallery-horizontal-end-solid",
	});
}

export default Component;
