import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gw2l6sb_b.css';
import '../../css/p/pjxp7fouu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gw2l6sb_b"/><path class="pjxp7fouu"/></g>`,
		"fallback": "iconoir:chat-bubble",
	});
}

export default Component;
