import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yt64u8bvw.css';
import '../../css/z/z0fu1xbhy.css';
import '../../css/x/xnodzworh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k yt64u8bvw"/><path class="wm-a z0fu1xbhy"/><path class="wm-s xnodzworh"/></g>`,
		"fallback": "withicons:bot-off-gloss",
	});
}

export default Component;
