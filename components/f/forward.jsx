import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0zz0d6cp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0zz0d6cp"/>`,
		"fallback": "charm:forward",
	});
}

export default Component;
