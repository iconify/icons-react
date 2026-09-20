import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g60a0jb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g60a0jb9n"/>`,
		"fallback": "mdi:book-cog-outline",
	});
}

export default Component;
