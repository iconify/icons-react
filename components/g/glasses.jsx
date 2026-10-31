import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y3ar07z2a.css';
import '../../css/v/vvzj0mb4r.css';
import '../../css/b/bg2vk4igj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow y3ar07z2a"/><path class="vvzj0mb4r"/><path class="bg2vk4igj"/></g>`,
		"fallback": "withicons-retro:glasses",
	});
}

export default Component;
