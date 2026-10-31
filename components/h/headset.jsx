import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zhshh0bfq.css';
import '../../css/t/tesubgb5t.css';
import '../../css/w/wic4ltb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow zhshh0bfq"/><path class="tesubgb5t"/><path class="wic4ltb8e"/></g>`,
		"fallback": "withicons-retro:headset",
	});
}

export default Component;
