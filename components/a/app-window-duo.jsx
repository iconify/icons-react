import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk_z0sbwn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wt5ycxxxi.css';
import '../../css/w/wi0btuoim.css';
import '../../css/h/h5khc0v2w.css';
import '../../css/f/f2i__-d5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk_z0sbwn secondary"/><g class="dt0cm9dhy primary"><path class="wt5ycxxxi"/><path class="wi0btuoim"/><path class="h5khc0v2w"/><path class="f2i__-d5f"/></g>`,
		"fallback": "iconaut:app-window-duo",
	});
}

export default Component;
