import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wlt1rbb1o.css';
import '../../css/m/my8ruib6e.css';
import '../../css/v/vli-hlbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wlt1rbb1o"/><path class="my8ruib6e"/><path class="vli-hlbzh"/></g>`,
		"fallback": "si:ai-chat-duotone",
	});
}

export default Component;
