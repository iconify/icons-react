import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2qt7m8kk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2qt7m8kk"/>`,
		"fallback": "whh:emojigrinalt",
	});
}

export default Component;
