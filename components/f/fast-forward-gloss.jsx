import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr8bfngly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr8bfngly"/>`,
		"fallback": "withicons:fast-forward-gloss",
	});
}

export default Component;
