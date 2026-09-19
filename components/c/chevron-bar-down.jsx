import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erays-b5h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erays-b5h"/>`,
		"fallback": "bi:chevron-bar-down",
	});
}

export default Component;
