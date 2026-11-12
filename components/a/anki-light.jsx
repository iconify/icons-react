import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7h-q9q4l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7h-q9q4l"/>`,
		"fallback": "selfhst:anki-light",
	});
}

export default Component;
