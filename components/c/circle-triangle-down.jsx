import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctuk4ds0v.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctuk4ds0v"/>`,
		"fallback": "si-glyph:circle-triangle-down",
	});
}

export default Component;
