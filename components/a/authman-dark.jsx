import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f88db6bit.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f88db6bit"/>`,
		"fallback": "selfhst:authman-dark",
	});
}

export default Component;
