import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf97cqb0h.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf97cqb0h"/>`,
		"fallback": "bpmn:compensation-marker",
	});
}

export default Component;
