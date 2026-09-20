import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcf9lrb9i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcf9lrb9i"/>`,
		"fallback": "la:dice-d20-solid",
	});
}

export default Component;
