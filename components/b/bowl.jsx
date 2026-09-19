import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff2isvjvt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff2isvjvt"/>`,
		"fallback": "ep:bowl",
	});
}

export default Component;
