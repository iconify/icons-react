import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y0jvhibuk.css';
import '../../css/z/zrwz6z69g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y0jvhibuk"/><path class="zrwz6z69g"/></g>`,
		"fallback": "tdesign:chat-bubble",
	});
}

export default Component;
