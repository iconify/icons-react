import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz94w__1n.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz94w__1n"/>`,
		"fallback": "bpmn:event-subprocess-expanded",
	});
}

export default Component;
