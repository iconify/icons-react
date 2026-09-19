import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rztsgpblb.css';

const viewBox = {"width":666,"height":679};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rztsgpblb"/>`,
		"fallback": "ls:bad",
	});
}

export default Component;
