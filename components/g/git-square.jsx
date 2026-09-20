import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aawif9bvo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aawif9bvo"/>`,
		"fallback": "la:git-square",
	});
}

export default Component;
