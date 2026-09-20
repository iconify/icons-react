import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y0jvhibuk.css';
import '../../css/z/zrwz6z69g.css';
import '../../css/r/r51t0hbuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y0jvhibuk"/><path clip-rule="evenodd" class="zrwz6z69g"/><path class="r51t0hbuz"/></g>`,
		"fallback": "tdesign:chat-bubble-history",
	});
}

export default Component;
