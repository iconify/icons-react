import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bzgl5mbjj.css';
import '../../css/c/cnqgj_7ld.css';
import '../../css/s/sn07vob-o.css';
import '../../css/d/dfu4xbo5x.css';
import '../../css/f/f6q-rwbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bzgl5mbjj"/><path class="cnqgj_7ld"/><path class="sn07vob-o"/><path class="dfu4xbo5x"/><path class="f6q-rwbae"/></g>`,
		"fallback": "withicons-bauhaus:avatar-man-cap",
	});
}

export default Component;
