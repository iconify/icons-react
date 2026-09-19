import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_ld2sbji.css';
import '../../css/b/bswnp6bnx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_ld2sbji"/><path class="bswnp6bnx"/>`,
		"fallback": "carbon:ibm-unstructured-data-processor",
	});
}

export default Component;
