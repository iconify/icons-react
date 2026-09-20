import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3rqy3bho.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3rqy3bho"/>`,
		"fallback": "la:dot-circle",
	});
}

export default Component;
