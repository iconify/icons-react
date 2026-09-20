import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brx7nk65y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brx7nk65y"/>`,
		"fallback": "mdi:food-hot-dog",
	});
}

export default Component;
