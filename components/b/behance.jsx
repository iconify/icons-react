import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygqz0ob6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygqz0ob6z"/>`,
		"fallback": "ci:behance",
	});
}

export default Component;
