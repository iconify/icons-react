import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivgi5xbir.css';

const viewBox = {"width":768,"height":1026};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivgi5xbir"/>`,
		"fallback": "whh:bluetooth",
	});
}

export default Component;
