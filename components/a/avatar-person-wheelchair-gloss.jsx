import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mmeghsbik.css';
import '../../css/x/xzxx-xbck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mmeghsbik wm-k"/><path class="wm-a xzxx-xbck"/></g>`,
		"fallback": "withicons:avatar-person-wheelchair-gloss",
	});
}

export default Component;
