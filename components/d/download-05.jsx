import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hxbwqlgnx.css';
import '../../css/y/yvx951gue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hxbwqlgnx"/><path class="yvx951gue"/></g>`,
		"fallback": "hugeicons:download-05",
	});
}

export default Component;
