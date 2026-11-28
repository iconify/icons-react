import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zsyie8bcf.css';
import '../../css/m/m_q9he-xk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zsyie8bcf"/><path class="m_q9he-xk"/></g>`,
		"fallback": "iconaut:crop-duo",
	});
}

export default Component;
