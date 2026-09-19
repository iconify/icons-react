import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebky43byo.css';

const viewBox = {"width":1024,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebky43byo"/>`,
		"fallback": "whh:fblike",
	});
}

export default Component;
