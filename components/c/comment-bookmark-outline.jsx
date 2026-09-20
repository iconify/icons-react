import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chdz1wbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chdz1wbkh"/>`,
		"fallback": "mdi:comment-bookmark-outline",
	});
}

export default Component;
