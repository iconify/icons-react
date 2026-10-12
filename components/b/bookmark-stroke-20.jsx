import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_9hn1bdb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_9hn1bdb"/>`,
		"fallback": "garden:bookmark-stroke-20",
	});
}

export default Component;
