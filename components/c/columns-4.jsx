import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wt5ycxxxi.css';
import '../../css/f/fa6fplbeg.css';
import '../../css/v/vndf8ubme.css';
import '../../css/w/wn8h4acsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wt5ycxxxi"/><path class="fa6fplbeg"/><path class="vndf8ubme"/><path class="wn8h4acsq"/></g>`,
		"fallback": "iconaut:columns-4",
	});
}

export default Component;
