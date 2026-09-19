import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo3hbbpap.css';

const viewBox = {"width":1792,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo3hbbpap"/>`,
		"fallback": "fa:comments-o",
	});
}

export default Component;
