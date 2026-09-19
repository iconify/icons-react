import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2ca4z9jp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2ca4z9jp"/>`,
		"fallback": "bpmn:end-event-multiple",
	});
}

export default Component;
