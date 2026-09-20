import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t7wkurbrc.css';
import '../../css/c/cqqcv5fpv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t7wkurbrc"/><path clip-rule="evenodd" class="cqqcv5fpv"/></g>`,
		"fallback": "streamline-color:chat-bubble-oval-notification-flat",
	});
}

export default Component;
