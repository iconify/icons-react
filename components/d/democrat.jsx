import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twv9pbpkt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twv9pbpkt"/>`,
		"fallback": "la:democrat",
	});
}

export default Component;
