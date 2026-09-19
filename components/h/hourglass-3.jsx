import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i--uujb9n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i--uujb9n"/>`,
		"fallback": "fa7-solid:hourglass-3",
	});
}

export default Component;
