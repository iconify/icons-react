import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy6uo1b3k.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy6uo1b3k"/>`,
		"fallback": "garden:arrow-left-up-fill-12",
	});
}

export default Component;
