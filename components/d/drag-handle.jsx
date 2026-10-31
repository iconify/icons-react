import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zpfeqcc9n.css';
import '../../css/x/xd-qidb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="zpfeqcc9n"/><path class="xd-qidb7p"/></g>`,
		"fallback": "withicons-retro:drag-handle",
	});
}

export default Component;
