import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/udloo1-wo.css';
import '../../css/l/l4seu0bbh.css';
import '../../css/y/y-avxdb3w.css';
import '../../css/f/far-3bbrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="udloo1-wo"/><path class="l4seu0bbh"/><path class="y-avxdb3w"/><path class="far-3bbrh"/></g>`,
		"fallback": "hugeicons:helicopter",
	});
}

export default Component;
