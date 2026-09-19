import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5xl8acvc.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5xl8acvc"/>`,
		"fallback": "fad:digital8",
	});
}

export default Component;
