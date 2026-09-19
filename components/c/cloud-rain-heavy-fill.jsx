import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4pf3kmmn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4pf3kmmn"/>`,
		"fallback": "bi:cloud-rain-heavy-fill",
	});
}

export default Component;
