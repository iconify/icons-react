import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izft7ummp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izft7ummp"/>`,
		"fallback": "carbon:ibm-watsonx-code-assistant-for-z-validation-assistant",
	});
}

export default Component;
