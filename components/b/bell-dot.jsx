import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vpb8ptbte.css';
import '../../css/f/f_wobbxna.css';
import '../../css/s/srwwv-s6o.css';
import '../../css/g/grszprbdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vpb8ptbte wm-k"/><path class="f_wobbxna wm-s"/><path class="srwwv-s6o"/><path class="grszprbdj"/></g>`,
		"fallback": "withicons-bauhaus:bell-dot",
	});
}

export default Component;
