import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rchyk3jrd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rchyk3jrd"/>`,
		"fallback": "at-icons:git-pull-request",
	});
}

export default Component;
