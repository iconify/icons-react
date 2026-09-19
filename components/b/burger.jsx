import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8kwrsbjz.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8kwrsbjz"/>`,
		"fallback": "ps:burger",
	});
}

export default Component;
