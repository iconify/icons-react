import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va-uq9b_r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va-uq9b_r"/>`,
		"fallback": "codicon:chat-sparkle-warning",
	});
}

export default Component;
