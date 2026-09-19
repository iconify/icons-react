import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icit6mbnm.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icit6mbnm"/>`,
		"fallback": "si-glyph:bubble-message-hi",
	});
}

export default Component;
