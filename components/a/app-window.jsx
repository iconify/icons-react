import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l7f1sjbcp.css';
import '../../css/t/tt34m96-v.css';
import '../../css/x/x43575byl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="l7f1sjbcp wm-shadow"/><path class="tt34m96-v"/><path class="x43575byl"/></g>`,
		"fallback": "withicons-retro:app-window",
	});
}

export default Component;
