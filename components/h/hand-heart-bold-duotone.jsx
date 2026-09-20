import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/um-mq-5bk.css';
import '../../css/z/zjag56b6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="um-mq-5bk"/><path class="zjag56b6z"/></g>`,
		"fallback": "solar:hand-heart-bold-duotone",
	});
}

export default Component;
