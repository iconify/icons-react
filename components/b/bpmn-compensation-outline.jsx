import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gte1i1jyj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gte1i1jyj"/>`,
		"fallback": "carbon:bpmn-compensation-outline",
	});
}

export default Component;
