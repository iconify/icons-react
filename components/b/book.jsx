import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhj26dnyh.css';

const viewBox = {"width":1696,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhj26dnyh"/>`,
		"fallback": "fa:book",
	});
}

export default Component;
