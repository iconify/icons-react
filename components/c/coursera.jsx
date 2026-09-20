import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phxqhm4il.css';

const viewBox = {"width":1155,"height":164};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phxqhm4il"/>`,
		"fallback": "thesvg-color:coursera",
	});
}

export default Component;
