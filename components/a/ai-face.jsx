import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y8d9j006r.css';
import '../../css/n/n4_6lym2d.css';
import '../../css/s/sj6_jtbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="y8d9j006r"/><path class="n4_6lym2d"/><path class="sj6_jtbog"/></g>`,
		"fallback": "iconaut:ai-face",
	});
}

export default Component;
