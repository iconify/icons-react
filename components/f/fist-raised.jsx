import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4bh5vb0k.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4bh5vb0k"/>`,
		"fallback": "fa-solid:fist-raised",
	});
}

export default Component;
