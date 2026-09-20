import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ae7iqmblq.css';
import '../../css/q/qq_bd7j8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ae7iqmblq"/><path class="qq_bd7j8q"/></g>`,
		"fallback": "reicon:align-bottom-filled",
	});
}

export default Component;
