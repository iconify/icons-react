import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k2hvubbhh.css';
import '../../css/n/noellub8i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k2hvubbhh"/><path class="noellub8i"/></g>`,
		"fallback": "bi:chat-text",
	});
}

export default Component;
