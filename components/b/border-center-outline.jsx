import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j07ug2b2j.css';
import '../../css/b/be78hac3b.css';
import '../../css/q/q_8ldsbpo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j07ug2b2j"/><path class="be78hac3b"/><path clip-rule="evenodd" class="q_8ldsbpo"/></g>`,
		"fallback": "glyphs:border-center-outline",
	});
}

export default Component;
