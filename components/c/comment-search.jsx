import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9rt_3bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9rt_3bby"/>`,
		"fallback": "mdi:comment-search",
	});
}

export default Component;
