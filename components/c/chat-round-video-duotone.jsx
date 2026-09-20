import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cq3f2yo5h.css';
import '../../css/h/h7i7webfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cq3f2yo5h"/><path class="h7i7webfr"/></g>`,
		"fallback": "reicon:chat-round-video-duotone",
	});
}

export default Component;
