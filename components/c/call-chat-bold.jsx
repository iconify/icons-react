import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tqq9tgbgg.css';
import '../../css/q/qw77k86mr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tqq9tgbgg"/><path class="qw77k86mr"/></g>`,
		"fallback": "solar:call-chat-bold",
	});
}

export default Component;
