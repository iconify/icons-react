import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lf764pl7g.css';
import '../../css/m/mb5wgl3fh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lf764pl7g"/><path class="mb5wgl3fh"/></g>`,
		"fallback": "mynaui:hotel-solid",
	});
}

export default Component;
