import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on15oyn-w.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on15oyn-w"/>`,
		"fallback": "pullo:file-check-thin",
	});
}

export default Component;
