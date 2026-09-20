import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8skr8x4h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8skr8x4h"/>`,
		"fallback": "pinhead:classical-building",
	});
}

export default Component;
