import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_q6p6bet.css';
import '../../css/v/vo_do-qpe.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_q6p6bet"/><path class="vo_do-qpe"/>`,
		"fallback": "openmoji:bluesky",
	});
}

export default Component;
