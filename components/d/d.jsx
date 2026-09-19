import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqgm7gb5n.css';

const viewBox = {"width":562,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqgm7gb5n"/>`,
		"fallback": "ls:d",
	});
}

export default Component;
