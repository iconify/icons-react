import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb4ghvnyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb4ghvnyj"/>`,
		"fallback": "proicons:gitlab",
	});
}

export default Component;
