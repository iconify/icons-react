import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu7wnbf0h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu7wnbf0h"/>`,
		"fallback": "selfhst:fasten-health",
	});
}

export default Component;
