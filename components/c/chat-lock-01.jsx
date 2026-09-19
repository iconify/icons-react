import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c3lmyibhh.css';
import '../../css/b/b5mhlr-wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c3lmyibhh"/><path class="b5mhlr-wm"/></g>`,
		"fallback": "hugeicons:chat-lock-01",
	});
}

export default Component;
