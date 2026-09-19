import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3e7prykc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3e7prykc"/>`,
		"fallback": "at-icons:frowning-face",
	});
}

export default Component;
