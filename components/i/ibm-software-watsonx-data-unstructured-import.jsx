import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyz1-gphb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyz1-gphb"/>`,
		"fallback": "carbon:ibm-software-watsonx-data-unstructured-import",
	});
}

export default Component;
