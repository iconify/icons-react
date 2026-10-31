import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wy-ve50jw.css';
import '../../css/c/cl25-hbps.css';
import '../../css/l/l7rw0ybiq.css';
import '../../css/k/k5qg7tv1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow wy-ve50jw"/><path class="cl25-hbps"/><path class="l7rw0ybiq"/><path class="k5qg7tv1b"/></g>`,
		"fallback": "withicons-retro:flag-checkered",
	});
}

export default Component;
