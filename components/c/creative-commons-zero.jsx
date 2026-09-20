import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlwvwzxtf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlwvwzxtf"/>`,
		"fallback": "la:creative-commons-zero",
	});
}

export default Component;
