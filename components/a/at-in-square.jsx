import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjh-x9b9z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjh-x9b9z"/>`,
		"fallback": "roentgen:at-in-square",
	});
}

export default Component;
