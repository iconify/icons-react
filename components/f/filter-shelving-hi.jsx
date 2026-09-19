import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkgi4lmks.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkgi4lmks"/>`,
		"fallback": "fad:filter-shelving-hi",
	});
}

export default Component;
