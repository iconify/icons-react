import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-9fyzgba.css';

const viewBox = {"width":768,"height":646};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-9fyzgba"/>`,
		"fallback": "ls:grayscale",
	});
}

export default Component;
