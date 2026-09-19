import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgms884ft.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgms884ft"/>`,
		"fallback": "carbon:bpmn-link-fill",
	});
}

export default Component;
