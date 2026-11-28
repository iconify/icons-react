import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewmyn8hoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewmyn8hoi"/>`,
		"fallback": "iconaut:dice-four-solid",
	});
}

export default Component;
