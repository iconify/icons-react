import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h55a4xb6m.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h55a4xb6m"/>`,
		"fallback": "pullo:folder-check-bold",
	});
}

export default Component;
