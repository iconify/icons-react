import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y0jvhibuk.css';
import '../../css/z/zrwz6z69g.css';
import '../../css/t/tmt1-ebym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y0jvhibuk"/><path clip-rule="evenodd" class="zrwz6z69g"/><path class="tmt1-ebym"/></g>`,
		"fallback": "tdesign:chat-bubble-smile",
	});
}

export default Component;
