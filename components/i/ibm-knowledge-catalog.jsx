import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkgkj5b7c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkgkj5b7c"/>`,
		"fallback": "carbon:ibm-knowledge-catalog",
	});
}

export default Component;
