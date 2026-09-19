import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3zufxbya.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3zufxbya"/>`,
		"fallback": "bpmn:end-event-terminate",
	});
}

export default Component;
