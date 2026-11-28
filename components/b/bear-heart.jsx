import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1w6kqn4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1w6kqn4l"/>`,
		"fallback": "noviair-light:bear-heart",
	});
}

export default Component;
