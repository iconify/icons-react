import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0hzh0sbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0hzh0sbz"/>`,
		"fallback": "fontisto:flickr",
	});
}

export default Component;
