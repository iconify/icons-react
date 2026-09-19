import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu5cfjbnh.css';

const viewBox = {"width":128,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu5cfjbnh"/>`,
		"fallback": "fad:digital-dot",
	});
}

export default Component;
