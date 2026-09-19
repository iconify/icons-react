import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qdv5h4b9c.css';
import '../../css/z/zv7m6ob8p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qdv5h4b9c"/><path class="zv7m6ob8p"/></g>`,
		"fallback": "bi:envelope-at-fill",
	});
}

export default Component;
