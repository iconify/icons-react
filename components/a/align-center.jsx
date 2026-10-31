import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xexsrtbsy.css';
import '../../css/v/vogjxgb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="xexsrtbsy"/><path class="vogjxgb4v"/></g>`,
		"fallback": "withicons-retro:align-center",
	});
}

export default Component;
