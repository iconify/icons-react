import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s-x4t0bah.css';
import '../../css/f/f0hzc_bot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s-x4t0bah"/><path clip-rule="evenodd" class="f0hzc_bot"/></g>`,
		"fallback": "reicon:flashlight",
	});
}

export default Component;
