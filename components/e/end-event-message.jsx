import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auhx9fb-h.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auhx9fb-h"/>`,
		"fallback": "bpmn:end-event-message",
	});
}

export default Component;
