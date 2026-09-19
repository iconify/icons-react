import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9ojy9bhp.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9ojy9bhp"/>`,
		"fallback": "whh:batterytwenty",
	});
}

export default Component;
