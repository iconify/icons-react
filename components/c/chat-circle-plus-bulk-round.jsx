import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aec7lkj0a.css';
import '../../css/q/qw0qorbsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aec7lkj0a"/><path class="qw0qorbsd"/></g>`,
		"fallback": "coolicons:chat-circle-plus-bulk-round",
	});
}

export default Component;
