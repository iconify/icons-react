import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xp4t8zcwx.css';
import '../../css/e/evz9v2jxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xp4t8zcwx"/><path class="evz9v2jxz"/></g>`,
		"fallback": "pixelarticons:goal",
	});
}

export default Component;
