import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvcg5__wh.css';
import '../../css/i/irjsvsbnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvcg5__wh"/><path class="irjsvsbnf"/>`,
		"fallback": "bx:bx-message-detail",
	});
}

export default Component;
