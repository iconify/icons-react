import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x_8jg4bbr.css';
import '../../css/s/saxycbruq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x_8jg4bbr"/><path class="saxycbruq"/></g>`,
		"fallback": "glyphs:envelope-open-bold",
	});
}

export default Component;
