import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqqs5-rmi.css';
import '../../css/s/sidaveb9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wqqs5-rmi"/><path clip-rule="evenodd" class="sidaveb9e"/></g>`,
		"fallback": "streamline-sharp-color:help-chat-2-flat",
	});
}

export default Component;
