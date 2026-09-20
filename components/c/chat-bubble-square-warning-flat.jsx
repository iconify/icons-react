import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svpp842ub.css';
import '../../css/l/lecm01a-q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="svpp842ub"/><path clip-rule="evenodd" class="lecm01a-q"/></g>`,
		"fallback": "streamline-plump-color:chat-bubble-square-warning-flat",
	});
}

export default Component;
