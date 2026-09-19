import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipyo4j7ey.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipyo4j7ey"/>`,
		"fallback": "bpmn:end-event-link",
	});
}

export default Component;
