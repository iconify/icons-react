import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0jpl0b7e.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0jpl0b7e"/>`,
		"fallback": "fad:duplicate",
	});
}

export default Component;
