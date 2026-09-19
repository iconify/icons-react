import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9n4q7bzz.css';

const viewBox = {"width":1664,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9n4q7bzz"/>`,
		"fallback": "fa:github-alt",
	});
}

export default Component;
