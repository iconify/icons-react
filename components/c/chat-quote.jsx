import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k2hvubbhh.css';
import '../../css/u/u1fz2nb3t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k2hvubbhh"/><path class="u1fz2nb3t"/></g>`,
		"fallback": "bi:chat-quote",
	});
}

export default Component;
