import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/k/ktzxsdbyc.css';
import '../../css/q/q40c2rczh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="ktzxsdbyc"/><path class="q40c2rczh"/></g>`,
		"fallback": "streamline-plump:chat-bubble-oval-notification",
	});
}

export default Component;
