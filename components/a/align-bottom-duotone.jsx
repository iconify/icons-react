import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qq_bd7j8q.css';
import '../../css/y/ygr4kzk5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qq_bd7j8q"/><path clip-rule="evenodd" class="ygr4kzk5x"/></g>`,
		"fallback": "reicon:align-bottom-duotone",
	});
}

export default Component;
