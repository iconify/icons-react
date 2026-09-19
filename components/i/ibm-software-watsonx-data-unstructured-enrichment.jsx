import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efac48boh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efac48boh"/>`,
		"fallback": "carbon:ibm-software-watsonx-data-unstructured-enrichment",
	});
}

export default Component;
