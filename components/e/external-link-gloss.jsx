import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gputmubpr.css';
import '../../css/l/llhv0hb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gputmubpr wm-k"/><path class="llhv0hb6r wm-a"/></g>`,
		"fallback": "withicons:external-link-gloss",
	});
}

export default Component;
