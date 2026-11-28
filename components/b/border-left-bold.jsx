import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-jk7uwey.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-jk7uwey"/>`,
		"fallback": "pullo:border-left-bold",
	});
}

export default Component;
