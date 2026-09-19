import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5b6qmb6u.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5b6qmb6u"/>`,
		"fallback": "fa7-solid:fill",
	});
}

export default Component;
