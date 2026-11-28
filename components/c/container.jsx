import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qqs5wqj6r.css';
import '../../css/h/huc2a6r5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qqs5wqj6r"/><path class="huc2a6r5u"/></g>`,
		"fallback": "iconaut:container",
	});
}

export default Component;
