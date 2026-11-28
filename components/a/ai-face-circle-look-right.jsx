import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
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
		"content": `<g class="dt0cm9dhy"><path class="ud95brdct"/><path class="xl8qfvbzk"/><path class="ff4111bsj"/></g>`,
		"fallback": "iconaut:ai-face-circle-look-right",
	});
}

export default Component;
