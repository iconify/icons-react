import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl1-wob7j.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl1-wob7j"/>`,
		"fallback": "pullo:bookmark-simple-check-bold",
	});
}

export default Component;
