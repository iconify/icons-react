import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_n99qbop.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_n99qbop"/>`,
		"fallback": "carbon:bpmn-compensation-fill",
	});
}

export default Component;
