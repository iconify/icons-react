import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y0jvhibuk.css';
import '../../css/z/zrwz6z69g.css';
import '../../css/t/tl62yhb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y0jvhibuk"/><path clip-rule="evenodd" class="zrwz6z69g"/><path class="tl62yhb2o"/></g>`,
		"fallback": "tdesign:chat-bubble-help",
	});
}

export default Component;
