import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4_b-eaap.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4_b-eaap"/>`,
		"fallback": "carbon:ibm-software-watsonx-data-analyze-and-process",
	});
}

export default Component;
