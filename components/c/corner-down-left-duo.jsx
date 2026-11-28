import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gvt7sz6wa.css';
import '../../css/w/wt5jidcgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gvt7sz6wa"/><path class="wt5jidcgh"/></g>`,
		"fallback": "iconaut:corner-down-left-duo",
	});
}

export default Component;
