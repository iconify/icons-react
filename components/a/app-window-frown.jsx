import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wt5ycxxxi.css';
import '../../css/w/wi0btuoim.css';
import '../../css/h/h5khc0v2w.css';
import '../../css/f/f2i__-d5f.css';
import '../../css/y/y8kawgzac.css';
import '../../css/i/ipjluqpgd.css';
import '../../css/r/r9idgibyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wt5ycxxxi"/><path class="wi0btuoim"/><path class="h5khc0v2w"/><path class="f2i__-d5f"/><path class="y8kawgzac"/><path class="ipjluqpgd"/><path class="r9idgibyp"/></g>`,
		"fallback": "iconaut:app-window-frown",
	});
}

export default Component;
