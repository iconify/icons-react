import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6boo9b3q.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6boo9b3q"/>`,
		"fallback": "pullo:group-fill",
	});
}

export default Component;
