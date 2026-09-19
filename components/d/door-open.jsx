import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_q0wlbac.css';
import '../../css/f/f0fv9c-tw.css';
import '../../css/g/g3ethnbyo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l_q0wlbac"/><path class="f0fv9c-tw"/><path class="g3ethnbyo"/></g>`,
		"fallback": "glyphs-poly:door-open",
	});
}

export default Component;
