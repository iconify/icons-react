import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-v3l6b8l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-v3l6b8l"/>`,
		"fallback": "garden:book-open-fill-16",
	});
}

export default Component;
