import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve-xwpvcm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve-xwpvcm"/>`,
		"fallback": "osmic:ice-cream-14",
	});
}

export default Component;
