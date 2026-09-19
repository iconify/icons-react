import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrzjfp6nq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrzjfp6nq"/>`,
		"fallback": "garden:alt-text-fill-16",
	});
}

export default Component;
