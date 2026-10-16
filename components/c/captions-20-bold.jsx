import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6dd8jb9u.css';
import '../../css/o/oaiisxbfk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6dd8jb9u"/><path class="oaiisxbfk"/>`,
		"fallback": "energy-icons:captions-20-bold",
	});
}

export default Component;
