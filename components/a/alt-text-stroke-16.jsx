import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko5onlbse.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko5onlbse"/>`,
		"fallback": "garden:alt-text-stroke-16",
	});
}

export default Component;
