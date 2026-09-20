import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/jhb1-yo2s.css';
import '../../css/w/wqxb78b0z.css';
import '../../css/q/q8vd6h-1c.css';
import '../../css/n/n0j58nbcr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="jhb1-yo2s"/><path class="wqxb78b0z"/><path class="q8vd6h-1c"/><path class="n0j58nbcr"/></g>`,
		"fallback": "streamline-plump-color:chat-bubble-text-square",
	});
}

export default Component;
