import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqxir0bwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqxir0bwy"/>`,
		"fallback": "mdi:comment-minus-outline",
	});
}

export default Component;
