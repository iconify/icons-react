import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1dh8kb7i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1dh8kb7i"/>`,
		"fallback": "bi:behance",
	});
}

export default Component;
