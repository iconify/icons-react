import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwvgzj0ml.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwvgzj0ml"/>`,
		"fallback": "carbon:bpmn-conditional-fill",
	});
}

export default Component;
