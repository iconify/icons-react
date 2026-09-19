import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/knpjr7j2q.css';
import '../../css/h/h8ksfzb1h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="knpjr7j2q"/><path class="h8ksfzb1h"/></g>`,
		"fallback": "glyphs:arrow-level-bold",
	});
}

export default Component;
