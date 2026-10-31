import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bqxm322bz.css';
import '../../css/h/hqkjkn57q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bqxm322bz"/><path class="hqkjkn57q"/></g>`,
		"fallback": "withicons-retro:heading",
	});
}

export default Component;
