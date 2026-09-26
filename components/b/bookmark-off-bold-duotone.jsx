import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ivd7kkkfk.css';
import '../../css/y/yci5ldutu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ivd7kkkfk"/><path class="yci5ldutu"/></g>`,
		"fallback": "solar:bookmark-off-bold-duotone",
	});
}

export default Component;
