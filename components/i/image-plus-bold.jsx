import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v71i76b5h.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v71i76b5h"/>`,
		"fallback": "pullo:image-plus-bold",
	});
}

export default Component;
