import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bk8j_ibvr.css';
import '../../css/o/oxh4elbgk.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bk8j_ibvr"/><path class="oxh4elbgk"/><path class="v0eyaibau wm-s"/></g>`,
		"fallback": "withicons-retro:bluetooth-off",
	});
}

export default Component;
