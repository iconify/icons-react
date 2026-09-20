import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/j/jn2e1oaba.css';
import '../../css/l/lhkps1b5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="jn2e1oaba"/><path class="lhkps1b5o"/></g>`,
		"fallback": "si:ai-chat-line",
	});
}

export default Component;
