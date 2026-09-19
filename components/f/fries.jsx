import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s88nxwbgu.css';

const viewBox = {"width":1026,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s88nxwbgu"/>`,
		"fallback": "whh:fries",
	});
}

export default Component;
