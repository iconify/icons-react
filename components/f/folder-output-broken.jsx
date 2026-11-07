import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y_tv_8b3w.css';
import '../../css/d/d0h1ndbsd.css';
import '../../css/l/l1843dc6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y_tv_8b3w"/><path class="d0h1ndbsd"/><path class="l1843dc6q"/></g>`,
		"fallback": "solar:folder-output-broken",
	});
}

export default Component;
