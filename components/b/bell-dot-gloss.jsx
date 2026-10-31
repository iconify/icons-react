import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/osjs0jb0w.css';
import '../../css/f/fa_lqsjlt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="osjs0jb0w wm-k"/><path class="fa_lqsjlt wm-s"/></g>`,
		"fallback": "withicons:bell-dot-gloss",
	});
}

export default Component;
