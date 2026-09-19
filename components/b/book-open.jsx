import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/himeb8x8w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="himeb8x8w"/>`,
		"fallback": "at-icons:book-open",
	});
}

export default Component;
