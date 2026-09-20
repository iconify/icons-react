import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xx1v-rogd.css';
import '../../css/a/a4l2d_7-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xx1v-rogd"/><path class="a4l2d_7-g"/></g>`,
		"fallback": "reicon:angles-left-filled",
	});
}

export default Component;
