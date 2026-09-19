import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lb3k_1gzc.css';
import '../../css/y/y2f4onbha.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lb3k_1gzc"/><rect class="y2f4onbha"/></g>`,
		"fallback": "glyphs-poly:celsius",
	});
}

export default Component;
