import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0pjxttfb.css';

const viewBox = {"width":2048,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0pjxttfb"/>`,
		"fallback": "fa:bell-slash-o",
	});
}

export default Component;
