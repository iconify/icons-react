import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zbsyr1dde.css';
import '../../css/f/fu-yhsexq.css';
import '../../css/d/d5ox4i4-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zbsyr1dde"/><path class="fu-yhsexq"/><path class="d5ox4i4-t wm-a"/></g>`,
		"fallback": "withicons:hospital",
	});
}

export default Component;
