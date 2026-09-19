import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdb5gbc-t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdb5gbc-t"/>`,
		"fallback": "carbon:bpmn-conditional-outline",
	});
}

export default Component;
