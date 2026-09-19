import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z67_wkbeg.css';
import '../../css/q/qvp7rrb8e.css';
import '../../css/d/dpcaptc_x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z67_wkbeg"/><path class="qvp7rrb8e"/><path class="dpcaptc_x"/></g>`,
		"fallback": "glyphs:book-duo",
	});
}

export default Component;
