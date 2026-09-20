import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vcho2dbek.css';
import '../../css/s/svee_ccsc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vcho2dbek"/><path class="svee_ccsc"/></g>`,
		"fallback": "streamline-plump-color:chat-bubble-oval-notification-flat",
	});
}

export default Component;
