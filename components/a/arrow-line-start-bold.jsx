import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j65d55bdx.css';
import '../../css/e/ebk4kbb8v.css';
import '../../css/a/aamyo7pvu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j65d55bdx"/><path class="ebk4kbb8v"/><path class="aamyo7pvu"/></g>`,
		"fallback": "glyphs:arrow-line-start-bold",
	});
}

export default Component;
