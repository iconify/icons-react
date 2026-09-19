import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc4722a5u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc4722a5u"/>`,
		"fallback": "whh:copyright",
	});
}

export default Component;
