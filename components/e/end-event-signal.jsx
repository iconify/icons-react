import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycchd8gvg.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycchd8gvg"/>`,
		"fallback": "bpmn:end-event-signal",
	});
}

export default Component;
