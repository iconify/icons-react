import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w7wb6gbjq.css';
import '../../css/o/ozup14rkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="w7wb6gbjq"/><path class="ozup14rkq wm-s"/></g>`,
		"fallback": "withicons:crystal-ball-solid",
	});
}

export default Component;
