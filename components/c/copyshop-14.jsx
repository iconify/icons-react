import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u__94wbxi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u__94wbxi"/>`,
		"fallback": "osmic:copyshop-14",
	});
}

export default Component;
