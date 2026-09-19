import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjnv3rbuk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjnv3rbuk"/>`,
		"fallback": "fxemoji:contact",
	});
}

export default Component;
