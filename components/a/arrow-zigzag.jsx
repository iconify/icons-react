import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yspho42lu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yspho42lu"/>`,
		"fallback": "at-icons:arrow-zigzag",
	});
}

export default Component;
