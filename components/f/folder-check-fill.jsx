import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/daf5wab8k.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="daf5wab8k"/>`,
		"fallback": "pullo:folder-check-fill",
	});
}

export default Component;
