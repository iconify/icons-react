import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7oztwb8k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y7oztwb8k"/>`,
		"fallback": "heroicons-solid:globe-alt",
	});
}

export default Component;
