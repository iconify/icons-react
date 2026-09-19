import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pjxp7fouu.css';
import '../../css/q/qkf5pcc0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pjxp7fouu"/><path class="qkf5pcc0k"/></g>`,
		"fallback": "iconoir:chat-bubble-translate",
	});
}

export default Component;
