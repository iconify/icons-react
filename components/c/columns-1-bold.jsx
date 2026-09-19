import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/d/d7ze-3byf.css';
import '../../css/v/v8921wpmq.css';
import '../../css/a/auk98ibeb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="d7ze-3byf"/><rect class="v8921wpmq"/><path class="auk98ibeb"/></g>`,
		"fallback": "glyphs:columns-1-bold",
	});
}

export default Component;
