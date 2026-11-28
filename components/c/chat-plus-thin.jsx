import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crt23cceo.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crt23cceo"/>`,
		"fallback": "pullo:chat-plus-thin",
	});
}

export default Component;
