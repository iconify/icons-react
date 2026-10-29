import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/ra-93zbub.css';
import '../../css/z/zp4w9kbpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ra-93zbub wm-k"/><path class="wm-a zp4w9kbpq"/></g>`,
		"fallback": "withicons-bauhaus:cable",
	});
}

export default Component;
