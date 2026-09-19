import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nk4syz2ss.css';
import '../../css/u/u9wri7bhi.css';

const viewBox = {"width":30,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nk4syz2ss"/><path class="u9wri7bhi"/></g>`,
		"fallback": "et:genius",
	});
}

export default Component;
