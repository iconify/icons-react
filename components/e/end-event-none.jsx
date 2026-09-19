import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elgjl_fle.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elgjl_fle"/>`,
		"fallback": "bpmn:end-event-none",
	});
}

export default Component;
