import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4myg7bgp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4myg7bgp"/>`,
		"fallback": "bpmn:end-event-cancel",
	});
}

export default Component;
