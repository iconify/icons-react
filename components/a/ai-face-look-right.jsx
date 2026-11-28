import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y8d9j006r.css';
import '../../css/x/xl8qfvbzk.css';
import '../../css/f/ff4111bsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="y8d9j006r"/><path class="xl8qfvbzk"/><path class="ff4111bsj"/></g>`,
		"fallback": "iconaut:ai-face-look-right",
	});
}

export default Component;
