import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j53h7-pxu.css';
import '../../css/m/mog9p8l_g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j53h7-pxu"/><rect class="mog9p8l_g"/></g>`,
		"fallback": "glyphs:fahrenheit-bold",
	});
}

export default Component;
