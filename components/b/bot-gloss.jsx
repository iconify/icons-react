import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q7k9g279t.css';
import '../../css/z/z0fu1xbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="q7k9g279t wm-k"/><path class="wm-a z0fu1xbhy"/></g>`,
		"fallback": "withicons:bot-gloss",
	});
}

export default Component;
