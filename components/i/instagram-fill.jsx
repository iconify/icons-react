import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys5kuk1gd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys5kuk1gd"/>`,
		"fallback": "ri:instagram-fill",
	});
}

export default Component;
