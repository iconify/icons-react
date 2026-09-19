import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6n4bfy8r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6n4bfy8r"/>`,
		"fallback": "heroicons:book-open-16-solid",
	});
}

export default Component;
