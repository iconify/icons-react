import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1ia54h9w.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1ia54h9w"/>`,
		"fallback": "pullo:border-bottom",
	});
}

export default Component;
