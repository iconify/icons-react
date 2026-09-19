import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4jjlrbbs.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4jjlrbbs"/>`,
		"fallback": "whh:batteryempty",
	});
}

export default Component;
