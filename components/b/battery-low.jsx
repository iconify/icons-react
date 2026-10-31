import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e8mb1rodb.css';
import '../../css/e/e066grb0j.css';
import '../../css/h/hn7xqebqj.css';
import '../../css/w/w6r4lacra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="e8mb1rodb wm-shadow"/><path class="e066grb0j"/><path class="hn7xqebqj"/><path class="w6r4lacra"/></g>`,
		"fallback": "withicons-retro:battery-low",
	});
}

export default Component;
