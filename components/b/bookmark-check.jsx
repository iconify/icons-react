import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t6dlwte9y.css';
import '../../css/i/iw_h8tbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="t6dlwte9y"/><path class="iw_h8tbvx"/></g>`,
		"fallback": "withicons-bauhaus:bookmark-check",
	});
}

export default Component;
