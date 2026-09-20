import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mnwot3byd.css';
import '../../css/c/c9z91hbtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mnwot3byd"/><path clip-rule="evenodd" class="c9z91hbtx"/></g>`,
		"fallback": "reicon:bold-square-filled",
	});
}

export default Component;
