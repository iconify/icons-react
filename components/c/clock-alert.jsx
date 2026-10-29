import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q2s0b3b5j.css';
import '../../css/i/ijxc9x4ab.css';
import '../../css/n/n1__edbye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="q2s0b3b5j wm-k"/><path class="ijxc9x4ab"/><path class="n1__edbye wm-s"/></g>`,
		"fallback": "withicons-bauhaus:clock-alert",
	});
}

export default Component;
