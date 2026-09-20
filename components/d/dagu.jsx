import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va_1o5bbc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va_1o5bbc"/>`,
		"fallback": "selfhst:dagu",
	});
}

export default Component;
