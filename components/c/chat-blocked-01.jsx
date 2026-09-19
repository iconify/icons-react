import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xub0iwwuf.css';
import '../../css/y/yvu06kbvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xub0iwwuf"/><path class="yvu06kbvk"/></g>`,
		"fallback": "hugeicons:chat-blocked-01",
	});
}

export default Component;
