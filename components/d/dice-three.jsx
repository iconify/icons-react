import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr1ljxbfy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr1ljxbfy"/>`,
		"fallback": "la:dice-three",
	});
}

export default Component;
