import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d08j53qld.css';
import '../../css/h/hyiv-xb_h.css';
import '../../css/q/qk9xa2v5m.css';
import '../../css/t/t_sk1gbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="d08j53qld"/><path class="hyiv-xb_h"/><path class="qk9xa2v5m"/><path class="t_sk1gbtt"/></g>`,
		"fallback": "withicons-bauhaus:avatar-man-bald",
	});
}

export default Component;
