import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldzc12j9b.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldzc12j9b"/>`,
		"fallback": "bpmn:end-event-error",
	});
}

export default Component;
