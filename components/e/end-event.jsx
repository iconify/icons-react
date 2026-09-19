import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2ds15qxn.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2ds15qxn"/>`,
		"fallback": "bpmn:end-event",
	});
}

export default Component;
