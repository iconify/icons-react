import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffshe1a3t.css';
import '../../css/e/e00cwmbhu.css';
import '../../css/z/z3vkyzblr.css';
import '../../css/r/r98e9ibln.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ffshe1a3t"/><path class="e00cwmbhu"/><path class="z3vkyzblr"/><path class="r98e9ibln"/></g>`,
		"fallback": "streamline-color:calendar-star",
	});
}

export default Component;
