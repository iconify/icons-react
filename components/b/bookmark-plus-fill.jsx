import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6kk1bc2g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6kk1bc2g"/>`,
		"fallback": "bi:bookmark-plus-fill",
	});
}

export default Component;
