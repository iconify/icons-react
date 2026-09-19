import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h7wpl6byg.css';
import '../../css/r/rxejns39i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h7wpl6byg"/><path class="rxejns39i"/></g>`,
		"fallback": "bi:chevron-double-left",
	});
}

export default Component;
