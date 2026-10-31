import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/muntwct_t.css';
import '../../css/j/jl1r8qbwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="muntwct_t wm-k"/><path class="jl1r8qbwp wm-s"/></g>`,
		"fallback": "withicons:haunted-house-gloss",
	});
}

export default Component;
