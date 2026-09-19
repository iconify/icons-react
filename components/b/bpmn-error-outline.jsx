import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-8ikw0ph.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-8ikw0ph"/>`,
		"fallback": "carbon:bpmn-error-outline",
	});
}

export default Component;
