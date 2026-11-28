import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rnthg3b6v.css';
import '../../css/q/qz0wv7rxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rnthg3b6v"/><path class="qz0wv7rxd"/></g>`,
		"fallback": "iconaut:chevron-double-left-duo",
	});
}

export default Component;
