import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ut8fzrp6e.css';
import '../../css/x/xf933xqrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ut8fzrp6e"/><path class="xf933xqrk"/></g>`,
		"fallback": "thesvg:comet-api",
	});
}

export default Component;
