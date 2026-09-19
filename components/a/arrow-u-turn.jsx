import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h5op0mbrw.css';
import '../../css/r/r2tl73b1o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h5op0mbrw"/><path class="r2tl73b1o"/></g>`,
		"fallback": "glyphs-poly:arrow-u-turn",
	});
}

export default Component;
