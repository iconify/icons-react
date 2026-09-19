import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j4sttvbdd.css';
import '../../css/f/fly7qfs2z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="j4sttvbdd"/><path class="fly7qfs2z"/></g>`,
		"fallback": "bi:chevron-double-up",
	});
}

export default Component;
