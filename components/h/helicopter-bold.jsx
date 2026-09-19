import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wk69wgvme.css';
import '../../css/y/y0tn1610r.css';
import '../../css/y/ys10sbcwu.css';
import '../../css/f/fd3mxjbhi.css';
import '../../css/s/sw6xrrosx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wk69wgvme"/><path clip-rule="evenodd" class="y0tn1610r"/><path class="ys10sbcwu"/><path clip-rule="evenodd" class="fd3mxjbhi"/><path class="sw6xrrosx"/></g>`,
		"fallback": "glyphs:helicopter-bold",
	});
}

export default Component;
