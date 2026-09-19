import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q4rvvnbeo.css';
import '../../css/t/t3c84fb9j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q4rvvnbeo"/><path clip-rule="evenodd" class="t3c84fb9j"/></g>`,
		"fallback": "glyphs:briefcase-bold",
	});
}

export default Component;
