import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/fdvahlowc.css';
import '../../css/y/y2tf606jw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="fdvahlowc"/><path class="y2tf606jw"/></g>`,
		"fallback": "hugeicons:ai-chat-02",
	});
}

export default Component;
