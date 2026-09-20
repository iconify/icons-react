import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/z/zp7cvwirh.css';
import '../../css/z/zmhio7umw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="zp7cvwirh"/><path class="zmhio7umw"/></g>`,
		"fallback": "streamline-plump:chat-two-bubbles-oval",
	});
}

export default Component;
