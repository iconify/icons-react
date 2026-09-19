import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbhh9cb2e.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbhh9cb2e"/>`,
		"fallback": "whh:cd",
	});
}

export default Component;
