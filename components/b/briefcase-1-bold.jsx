import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ab31-9b-a.css';
import '../../css/q/q95ykzb0k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ab31-9b-a"/><rect class="q95ykzb0k"/></g>`,
		"fallback": "glyphs:briefcase-1-bold",
	});
}

export default Component;
