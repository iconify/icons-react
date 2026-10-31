import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a3ty376mn.css';
import '../../css/x/xd1e2rb0d.css';
import '../../css/h/hled3t8ca.css';
import '../../css/d/dlyq4oxpk.css';
import '../../css/j/jjw18qblr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="a3ty376mn wm-shadow"/><path class="xd1e2rb0d"/><path class="hled3t8ca"/><path class="dlyq4oxpk"/><path class="jjw18qblr"/></g>`,
		"fallback": "withicons-retro:heart-pulse",
	});
}

export default Component;
