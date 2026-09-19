import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad2pn_1bn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad2pn_1bn"/>`,
		"fallback": "carbon:ibm-software-watsonx-data-structured-import",
	});
}

export default Component;
