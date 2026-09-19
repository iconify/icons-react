import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7e65b99l.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7e65b99l"/>`,
		"fallback": "si-glyph:bubble-message-dot",
	});
}

export default Component;
