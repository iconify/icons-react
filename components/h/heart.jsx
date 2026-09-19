import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3s4zvj1e.css';

const viewBox = {"width":768,"height":663};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3s4zvj1e"/>`,
		"fallback": "ls:heart",
	});
}

export default Component;
