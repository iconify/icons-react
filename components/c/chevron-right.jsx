import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlkgi9b-x.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlkgi9b-x"/>`,
		"fallback": "memory:chevron-right",
	});
}

export default Component;
