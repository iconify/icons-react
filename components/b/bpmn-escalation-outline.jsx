import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2kzvgajo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2kzvgajo"/>`,
		"fallback": "carbon:bpmn-escalation-outline",
	});
}

export default Component;
