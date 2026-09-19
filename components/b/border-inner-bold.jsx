import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/or-xk9b_u.css';
import '../../css/t/tei45nfmy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="or-xk9b_u"/><path class="tei45nfmy"/></g>`,
		"fallback": "glyphs:border-inner-bold",
	});
}

export default Component;
