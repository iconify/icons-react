import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol5jczc6e.css';

const viewBox = {"width":768,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol5jczc6e"/>`,
		"fallback": "ls:code",
	});
}

export default Component;
