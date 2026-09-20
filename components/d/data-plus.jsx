import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flc7jgumq.css';
import '../../css/n/nqwaabcqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="flc7jgumq"/><path class="nqwaabcqc"/></g>`,
		"fallback": "majesticons:data-plus",
	});
}

export default Component;
