import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci3tn5bwh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci3tn5bwh"/>`,
		"fallback": "bpmn:end-event-compensation",
	});
}

export default Component;
