import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh0w-acse.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh0w-acse"/>`,
		"fallback": "memory:chat-processing",
	});
}

export default Component;
