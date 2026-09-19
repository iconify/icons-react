import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3frg7bxu.css';
import '../../css/y/yr77b-b_k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3frg7bxu"/><path class="yr77b-b_k"/>`,
		"fallback": "carbon:delivery-add",
	});
}

export default Component;
