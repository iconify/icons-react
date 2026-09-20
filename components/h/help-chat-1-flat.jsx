import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjso9kbip.css';
import '../../css/f/f-foe1buu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pjso9kbip"/><path clip-rule="evenodd" class="f-foe1buu"/></g>`,
		"fallback": "streamline-plump-color:help-chat-1-flat",
	});
}

export default Component;
