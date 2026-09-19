import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/f/f6a9c8f7a.css';
import '../../css/y/ydqauvg5t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="f6a9c8f7a"/><path class="ydqauvg5t"/></g>`,
		"fallback": "icon-park-outline:flashlight",
	});
}

export default Component;
