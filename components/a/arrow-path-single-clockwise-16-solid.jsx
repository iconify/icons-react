import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf7wkzb0h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cf7wkzb0h"/>`,
		"fallback": "sidekickicons:arrow-path-single-clockwise-16-solid",
	});
}

export default Component;
