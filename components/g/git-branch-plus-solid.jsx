import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o9c6sr_8c.css';
import '../../css/p/pvvshiejd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="o9c6sr_8c"/><path class="pvvshiejd wm-s"/></g>`,
		"fallback": "withicons:git-branch-plus-solid",
	});
}

export default Component;
