import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fwfd39bzf.css';
import '../../css/z/zq51u7bjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fwfd39bzf"/><path class="zq51u7bjq"/></g>`,
		"fallback": "reicon:chat-square-like-duotone",
	});
}

export default Component;
