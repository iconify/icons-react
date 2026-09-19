import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9bhnkb_k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9bhnkb_k"/>`,
		"fallback": "garden:github-stroke-16",
	});
}

export default Component;
