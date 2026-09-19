import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h844aq-9e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h844aq-9e"/>`,
		"fallback": "bi:arrow-up-right-square",
	});
}

export default Component;
