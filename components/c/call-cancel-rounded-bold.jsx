import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b-xx8y-6j.css';
import '../../css/v/v5az-krmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b-xx8y-6j"/><path class="v5az-krmu"/></g>`,
		"fallback": "solar:call-cancel-rounded-bold",
	});
}

export default Component;
