import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae2-w0cbe.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y8d9j006r.css';
import '../../css/i/i00mmoboh.css';
import '../../css/n/nejcpbbyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae2-w0cbe secondary"/><g class="dt0cm9dhy primary"><path class="y8d9j006r"/><path class="i00mmoboh"/><path class="nejcpbbyx"/></g>`,
		"fallback": "iconaut:ai-face-look-down-duo",
	});
}

export default Component;
