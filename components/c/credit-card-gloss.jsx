import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-yd1ob6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-yd1ob6v"/>`,
		"fallback": "withicons:credit-card-gloss",
	});
}

export default Component;
