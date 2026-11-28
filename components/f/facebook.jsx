import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t3zbr9bdz.css';
import '../../css/t/tvtinublm.css';
import '../../css/a/ards16uyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="t3zbr9bdz"/><path class="tvtinublm"/><path class="ards16uyc"/></g>`,
		"fallback": "iconaut:facebook",
	});
}

export default Component;
