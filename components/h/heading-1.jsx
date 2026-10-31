import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xm135ubwj.css';
import '../../css/w/wkab_zovm.css';
import '../../css/a/am9q_ptrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="xm135ubwj"/><path class="wkab_zovm"/><path class="am9q_ptrr wm-s"/></g>`,
		"fallback": "withicons-retro:heading-1",
	});
}

export default Component;
