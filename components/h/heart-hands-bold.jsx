import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a71i2er_j.css';
import '../../css/m/mb98_4b0v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a71i2er_j"/><path class="mb98_4b0v"/></g>`,
		"fallback": "glyphs:heart-hands-bold",
	});
}

export default Component;
