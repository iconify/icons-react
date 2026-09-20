import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly8u96qqz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly8u96qqz"/>`,
		"fallback": "octicon:comment-discussion-16",
	});
}

export default Component;
