import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k955_kc5q.css';
import '../../css/b/bvi56cb7y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k955_kc5q"/><path clip-rule="evenodd" class="bvi56cb7y"/></g>`,
		"fallback": "streamline-color:chat-bubble-square-write-flat",
	});
}

export default Component;
