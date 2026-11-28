import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g1akucbjg.css';
import '../../css/k/ky0-5j8-r.css';
import '../../css/g/gcmcpc6kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="g1akucbjg"/><path class="ky0-5j8-r"/><path class="gcmcpc6kt"/></g>`,
		"fallback": "iconaut:bed",
	});
}

export default Component;
