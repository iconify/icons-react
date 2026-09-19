import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnvh5fb0e.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnvh5fb0e"/>`,
		"fallback": "fa7-solid:comment-slash",
	});
}

export default Component;
