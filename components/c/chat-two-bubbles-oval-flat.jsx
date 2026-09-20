import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kt4fsgdcr.css';
import '../../css/z/zr4_6ubua.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kt4fsgdcr"/><path class="zr4_6ubua"/></g>`,
		"fallback": "streamline-plump-color:chat-two-bubbles-oval-flat",
	});
}

export default Component;
