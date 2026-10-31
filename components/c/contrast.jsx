import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wg1orffma.css';
import '../../css/u/uyk-qnbwe.css';
import '../../css/i/iss7hukae.css';
import '../../css/j/ju8nv456d.css';
import '../../css/j/je3r3-0-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wg1orffma wm-shadow"/><path class="uyk-qnbwe"/><path class="iss7hukae"/><path class="ju8nv456d"/><path class="je3r3-0-v"/></g>`,
		"fallback": "withicons-retro:contrast",
	});
}

export default Component;
